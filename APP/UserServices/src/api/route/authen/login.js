const express = require("express")
const loginValidation = require("../../middlewares/Validations/authen/authentication")
const loginController = require("../../controller/authen/login.controller")

const route = express.Router()

route.post("/login",loginValidation,loginController)

module.exports = route;