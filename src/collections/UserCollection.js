const mongoose = require('mongoose');
const collection = 'user';
const user = require('../model/User');

var UserSchema = new mongoose.Schema(user, { collection });
  
module.exports = mongoose.model(collection, UserSchema, collection);