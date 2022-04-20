const mongoose = require('mongoose');

const userSchem = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
},{
    timestamps: true // created and updated at
})

const User = mongoose.model('User',userSchem);

module.exports = User;