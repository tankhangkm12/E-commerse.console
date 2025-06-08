const mongoose = require("mongoose")

const product = new mongoose.Schema({
    productId : {
        type :String,
        required : true,
        unique : true
    },
    name : {
        type :String,
        required : true,
        unique : true
    },
    description : {
        type :String,
    },
    price : {
        type : Number,
        required : true,
    },
    quantity : {
        type :Number,
        required : true,
    }
})

module.exports = mongoose.model("products",product)