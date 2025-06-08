const express = require("express")
const productValidation = require("../../middlewares/validations/product.validation.middleware")
const ProductCotroller = require("../../controller/products/product.controller")
const route = express.Router()

route.get("/concac",(req,res,next)=>{
    res.status(200).json({
        message : "Concac"
    })
})

route.post("/addproduct",productValidation,ProductCotroller.addProduct)

route.get("/getallproduct",ProductCotroller.getAllProduct)

module.exports = route;