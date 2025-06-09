const CartService = require("../../services/carts/cart.service");

class CartController{
    addProductsToCart(req,res,next){
        return CartService.addroductsToCart(req,res,next)
    }
    getUserCart(req,res,next){
        return CartService.getUserCart(req,res,next)
    }
    getCarts(req,res,next){
        if (req.account.role === "admin") return CartService.getCarts(req,res,next)
        return res.status(400).json({
            message : "No enough permission!!!"
        })
    }
}

module.exports = new CartController()