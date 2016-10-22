var fbBlob = {x:250, y:200, rad:40, color:"#4E59D4", name:"FB"};
var twitterBlob = {x:770, y:200, rad:40, color:"#1da1f2", name:"TWTR"};
var googleBlob = {x:250, y:400, rad:40, color:"#ea4335", name:"GOOG"};
var linkedinBlob = {x:770, y:400, rad:40, color:"#0077b5", name:"LNKD"};
var ctx;


function drawMainNode(blob)
{
	ctx.beginPath();
	ctx.arc(blob.x,blob.y,blob.rad,0,2*Math.PI);
	ctx.fillStyle = blob.color;
	ctx.fill();
	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = 'center';
	ctx.fillText(blob.name,blob.x, blob.y+10);
	ctx.fill();
	ctx.stroke();
}

function redraw() {
	ctx.clearRect(0,0,1020,600);
	drawMainNode(fbBlob);
	drawMainNode(twitterBlob);
	drawMainNode(googleBlob);
	drawMainNode(linkedinBlob);
}

function init() {
	var c = document.getElementById("graphCanvas");
	ctx = c.getContext("2d");
	redraw();
}

init();
var FBjson = queryStockData("FB");
var GOOGjson = queryStockData("GOOG");
var TWTRjson = queryStockData("TWTR");
var LNKDjson = queryStockData("LNKD");

fbBlob.x = 550;
redraw();
