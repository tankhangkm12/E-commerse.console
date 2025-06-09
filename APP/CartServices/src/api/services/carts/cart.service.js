const CartModel = require("../../models/carts/cart.model")

class CartServices{
    async addroductsToCart(req,res,next){
        const username = req.account.username;
        const {products} = req.body;
        if (products.length === 0)  return res.status(401).json({
            message : "No have products are needed to add !!"
        })
        const userCart = await CartModel.findOne({username});
        if (!userCart){
            const newUserCart =  new  CartModel({
                username : username,
                products : products
            })
            await newUserCart.save()
            return res.status(200).json({
                message : "Added user cart !!!"
            })
        }
        products.forEach(productToAdd => {
            const existingProduct = userCart.products.find(p => p.productId === productToAdd.productId)
            if (existingProduct) existingProduct.quantity += productToAdd.quantity;
            else userCart.products.push(productToAdd)
        })
        await userCart.save()

        return res.status(200).json({
            message: "Added to cart successfully!",
            cart: userCart,
        });

    }

    async getUserCart(req,res,next){
        const username = req.account.username;
        console.log(username)
        const userCart= await CartModel.findOne({username});
        console.log(userCart)
        if (!userCart) return res.status(200).json({
            message : "No have product in cart !!!"
        })
        return res.status(200).json({
            message : "Get products in cart successfully !!!",
            products : userCart.products
        })
    }

    async getCarts(req,res,next){
        const carts= await CartModel.find();
        if (!carts) return res.status(200).json({
            message : "No have product in cart !!!"
        })
        return res.status(200).json({
            message : "Get all cart successfully !!!",
            products : carts
        })
    }
}
module.exports = new CartServices()