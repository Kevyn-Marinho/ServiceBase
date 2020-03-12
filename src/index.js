var express = require('express');
var app = express();
var configureRoute = require('./routes/configure').configure;

app.get('/', function(req, res) {
  res.send('hello world my CI and CD on azure its working!!!');
});

configureRoute(app);

var port = process.env.PORT||3000;
app.listen(port);