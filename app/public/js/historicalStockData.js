var callback = function(_return /* The json returned for yahooapis */) {
    var totalReturned = _return.query.count;
    //OR: var totalReturned = _return.query.results.quote.length;
    var table = document.getElementById("#table");
    var row = table.insertRow();
    for (var i = 0; i < totalReturned; ++i) {
    	var row = table.insertRow();
        var stockCell = row.insertCell(0);
        var dateCell = row.insertCell(1);
        var closeCell = row.insertCell(2);
        var stock = _return.query.results.quote[i];
        stockCell.innerHTML = stock.Symbol;
        dateCell.innerHTML = stock.Date;
        closeCell.innerHTML = stock.Close;
    }
}

function queryStockData(symbol) {
	var url = 'http://query.yahooapis.com/v1/public/yql';
	var startDate = '2015-10-17';
	var endDate = '2016-10-17';
	var data = encodeURIComponent('select * from yahoo.finance.historicaldata where symbol = "' + symbol + '" and startDate = "' + startDate + '" and endDate = "' + endDate + '"');
	$.getJSON(url, 'q=' + data + "&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json", callback);
}
