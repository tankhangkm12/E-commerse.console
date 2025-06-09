const express = require("express")
const route = express.Router()
const orderRoute = require("./orders/order.route")
const authenticationToken = require("../middlewares/tokens/JWTVerify.token.middleware")

route.use("/orders",authenticationToken,orderRoute)

module.exports = route;