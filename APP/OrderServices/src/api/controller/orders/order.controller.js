const OrderService = require("../../services/orders/order.service")

class OrderController{

    getAllOrders(req,res,next){
        if (req.account.role === "admin") return OrderService.getAllOrders(req,res,next)
        else return res.status(400).json({
            message : "No enough permission !!!"
        })
    }

    addOrder(req,res,next){
        return OrderService.addOrder(req,res,next);
    }
}

module.exports = new OrderController()