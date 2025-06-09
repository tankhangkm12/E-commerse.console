const OrderModel = require("../../models/orders/order.model")
const axios = require('axios')
require("dotenv").config()

const GET_USER_CART = process.env.GET_USER_CART

class OrderServices{
    async getAllOrders(req,res,next){
        const orders = await OrderModel.find()
        if (!orders) return res.status(500).json({
            message : "No have order !"
        })
        res.status(200).json({
            message : "got all orders success !!!",
            list_orders : orders
        })
    }

    async addOrder(req,res,next){
        const username = req.account.username;
        const token = req.headers["authorization"].split(" ")[1]
        const userCartResponse = await axios.get(`${GET_USER_CART}/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`, // hoặc Bearer token
            } 
        })
        if (!userCartResponse) return res.status(500).json({
            message : "Undetermine Error !!!"
        })
        const userCart = userCartResponse.data.products
        
        const totalPrice = userCart.reduce((sum,product) => {
            return sum + product.price*product.quantity   
        },0) //init first element for sum
        const userOrder = new OrderModel({
            username : username,
            products : userCart,
            totalPrice : totalPrice,
            shippingAddress : req.body.shippingAddress
        })

        await userOrder.save();

        return res.status(200).json({
            message : "Add order successfully !!!",
            order_form : userOrder
        })
    }
}

module.exports = new OrderServices()