const express = require("express")
const route = express.Router()
const productRoute = require("../route/products/product.route")

route.use("/Products",productRoute)

module.exports = route;