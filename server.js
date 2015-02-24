var express = require('express');
var fs = require("fs");
var app = express();

app.get('/readme', function(req, res) {
  fs.readFile('lengthOf.js', function(err, data) {
    if (err) return;
    console.log(data.toString());
    res.send('hi');
  });
});

app.listen(process.env.PORT, function() {
  console.log('Started server on the port: ', process.env.PORT);
});