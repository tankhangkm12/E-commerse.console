const mongoose = require('mongoose')

const cart = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    products : [
        {
            productId : {
                type : String,
                required : true
            },
            name : {
                type : String,
                required : true
            },
            price : {
                type : Number,
                required : true
            },
            quantity : {
                type : Number,
                required : true
            }
        }
    ]
})

module.exports = mongoose.model("carts",cart)