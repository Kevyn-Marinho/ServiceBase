var express = require('express');
var app = express();
var configureRoute = require('./routes/configure').configure;


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

configureRoute(app);


app.listen(3000);