const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
 
});
//have access to the your functions
module.exports = mongoose.model('Register', registerSchema)