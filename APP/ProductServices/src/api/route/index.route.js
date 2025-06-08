const express = require("express")
const route = express.Router()
const authenticateToken = require("../middlewares/token/JWT.middleware")
const productRoute = require("../route/products/product.route")

route.use("/products",authenticateToken,productRoute)

module.exports = route;