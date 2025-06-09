const mongoose = require('mongoose')

const order = new mongoose.Schema({
    username: {
        type: String, // just store the ID (or UUID)
        required: true
    },

    products: [
    {
        productId: {
            type: String, // product ID from Product Service
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number, // store price at order time
            required: true
        }
    }],

    totalPrice: Number,

    shippingAddress: {
        type : String,
        required : true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = new mongoose.model("orders",order)