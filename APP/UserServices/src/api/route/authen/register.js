const express = require("express")
const register = require("../../controller/authen/register.controller")
const registerValidation = require("../../middlewares/Validations/authen/authentication")
const route = express.Router()

route.post("/register",registerValidation,register)


module.exports = route;
