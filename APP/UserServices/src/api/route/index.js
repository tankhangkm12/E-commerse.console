const express = require("express")
const authRoute = require("./authen/authentication")
const users = require("./users/user.route")
const route = express.Router()

// authen
route.use("/",authRoute)

//users
route.use("/",users)

module.exports = route;