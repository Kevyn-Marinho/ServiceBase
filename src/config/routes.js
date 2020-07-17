var userController = require('../controllers/UserController'); 

module.exports = (app) => {
    app.get('/users', userController.get)
       .get('/users/:id', userController.getById)
       .post('/users', userController.post);
} 
