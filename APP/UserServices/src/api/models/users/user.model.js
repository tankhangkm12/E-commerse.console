const mongoose = require("mongoose")
const user = new mongoose.Schema({
    userID: {
        type: String,
        unique: true,
        index: true
    },
    name: String,
    email: String,
    age: Number,
})

module.exports = mongoose.model("Users",user)