var express = require('express');
var mainRoutes = require('./server/routes/main-router');
var http = require('http');
var path = require('path');

var app = module.exports = express();

app.use('/', mainRoutes);

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


