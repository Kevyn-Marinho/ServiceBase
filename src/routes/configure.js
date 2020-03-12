var users = require('./users'); 

exports.configure = function (app) {
    app.get('/users', users.get);   
} 