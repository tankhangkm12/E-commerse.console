const ProductModel = require("../../models/products/product.model")
const {v4 : uuidv4} = require("uuid")

class productServices{
    async getAllProduct(req,res,next){
        const listProduct = await ProductModel.find();
        if (!listProduct) return res.status(500).json({
            message : "No have product !"
        })
        console.log(listProduct)
        return res.status(200).json({
            message : "successfuly !",
            products : listProduct
        })
    }

    async addProduct(req,res,next){
        const {name,description,price,quantity} = req.body;
        const newProduct = new ProductModel({
            productId : uuidv4(),
            name : name,
            description : (description ? description : " "),
            price : price,
            quantity : quantity
        })
        console.log(newProduct)
        await newProduct.save()
        return res.status(201).json({ message: "Add product successfully!" })
    }

}


module.exports = new productServices()