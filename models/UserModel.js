const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String, 
    password: String, 
    role: { type: String, enum: ['admin', 'user'] },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;