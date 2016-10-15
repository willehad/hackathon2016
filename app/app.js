var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/rest/hello', function (req, res) {
  res.json({reply: 'Hello World!'});
});

app.listen(3000, function () {
  console.log('Starting app);
});

