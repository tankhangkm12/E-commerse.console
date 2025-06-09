const express = require('express')
const CartController = require('../../controller/carts/cart.controller')
const route = express.Router()

route.get("/getcarts",CartController.getCarts)

route.patch("/addProductsToCart",CartController.addProductsToCart)

route.get("/getUserCart",CartController.getUserCart)
module.exports = route