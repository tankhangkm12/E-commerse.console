const express = require("express")
const route = express.Router()
const cartRoute = require("./carts/cart.route")
const authenticationToken = require("../middlewares/tokens/JWTVerify.token")

route.use("/cart",authenticationToken,cartRoute)

module.exports = route;