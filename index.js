var express = require('express');
var app = express();

app.get('/app', function (req, res) {
  res.send('Hello World!');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT);