const express = require("express");
const OrderController = require("../../controller/orders/order.controller");
const validationAddOrder = require("../../middlewares/validations/order/addOrder.validation");
const route = express.Router()

route.get("/getallorders",OrderController.getAllOrders)

route.post("/addorder",validationAddOrder,OrderController.addOrder)

module.exports = route;