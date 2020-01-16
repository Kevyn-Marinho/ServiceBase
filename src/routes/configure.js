var users = require('./users'); 

// H
exports.configure = (app) => {
    app.get('/users', users.get);   
} 