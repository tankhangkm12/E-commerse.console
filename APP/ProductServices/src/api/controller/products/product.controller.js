const ProductService = require("../../services/products/product.service");

class ProductController{

    getAllProduct(req,res,next){
        return ProductService.getAllProduct(req,res,next)
    }


    addProduct(req,res,next){
        if (req.account.role === "admin") return ProductService.addProduct(req,res,next);
        else return res.status(401).json({
            message : "No enough permission !!!"
        })
    }
}

module.exports = new ProductController()