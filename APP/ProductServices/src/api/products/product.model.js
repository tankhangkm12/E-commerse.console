const mongoose = require("mongoose")
const {v4 : uuidv4} = require("uuid")

const product = new mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true,
        default : uuidv4()
    },
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
    },
    price : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
})


module.exports = mongoose.Model("Products",product)