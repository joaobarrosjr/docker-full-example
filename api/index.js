var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! This is the api app microservice.');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
