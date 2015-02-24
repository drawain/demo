var express = require('express');
var fs = require("fs");
var app = express();
var lengthOf = require("./lengthOf")

app.get('/', function(req, res) {
  res.send('FOOLDAL');
});

app.get('/getLengthOfMedvedisznoember', function(req, res) {
    res.send(lengthOf('medvedisznoember').toString());
});

app.listen(process.env.PORT, function() {
  console.log('Started server on the port: ', process.env.PORT);
});