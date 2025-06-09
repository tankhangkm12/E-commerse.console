const express = require('express')
const CartController = require('../../controller/carts/cart.controller')
const route = express.Router()

route.get("/getcarts",CartController.getCarts)

route.patch("/addProductsToCart",CartController.addProductsToCart)

//get cart for user login
route.get("/getUserCart",CartController.getUserCart)

//get cart for params
route.get("/getUsernameCart/:username",CartController.getUsernameCart)
module.exports = route