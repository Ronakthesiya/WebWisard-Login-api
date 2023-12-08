const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userName : {
        type : String,
        required: [true,"please enter userName"]
    },
    userPassword : {
        type: String,
        required: true
    },
    userType : {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('users',schema);
