var express = require('express');
var app = express();

app.get('/app', function (req, res) {
  res.send('Hello World!');
});


var port = process.env.port || 3000;

app.listen(port);