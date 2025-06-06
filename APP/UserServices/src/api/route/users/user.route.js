const express = require("express")
const authToken = require("../../middlewares/Token/JWT.middleware")
const userController = require("../../controller/users/user.controller")
const route = express.Router()

// get method
route.get("/users/user",authToken,userController.getUser)

route.get("/users/listUser",authToken,userController.getAllUsers)

// patch method

route.patch("/users/updateUser",authToken,userController.updateInforUser)

module.exports = route;