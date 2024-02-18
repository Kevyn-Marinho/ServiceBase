var express = require('express');
var app = express();
app.use(express.json())

// require('./config/mongoose')();
require('./config/routes')(app);

app.get('/', function(req, res) {
  res.send('Node Api Service base');
});

var port = process.env.PORT||3000;
app.listen(port, function() { console.log('listening on ' + port)} );

