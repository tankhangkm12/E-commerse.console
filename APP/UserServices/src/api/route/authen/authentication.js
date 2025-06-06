const express = require("express")
const login = require("./login")
const account = require("./account")
const register = require("./register")
const vertifyToken = require("../../middlewares/Token/JWT.middleware")

const route = express.Router()

route.use("/authentication",login)
route.use("/authentication",register)
route.use("/account",vertifyToken,account)

module.exports = route;