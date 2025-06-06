const express = require("express")
const route = express.Router()
const accountControllers = require("../../controller/authen/account.controller")


//patch 
route.patch("/updateAccount",accountControllers.updateAccount)
route.patch("/removeAccount",accountControllers.removeAccount)

module.exports = route;