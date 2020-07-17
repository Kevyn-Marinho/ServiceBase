
module.exports = () => {
    var mongoose = require('mongoose');

    var host = process.env.MONGO_HOSTNAME || 'localhost';
    var db = process.env.MONGO_DB || 'servicebase';

    mongoose.connect(`mongodb://${host}:27017/${db}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true });
}

