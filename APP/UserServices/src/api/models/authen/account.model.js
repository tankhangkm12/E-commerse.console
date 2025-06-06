const mongoose = require("mongoose")
const account = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password : {
        type :String,
        required : true,
    },
    userID : {
        type: String,
        unique : true,
        required: true,
        ref: 'Users'
    },
    createAt : {
        type :Date,
        default : Date.now()
    },
    role : {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('Account',account)