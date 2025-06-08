const express = require("express")
const morgan = require("morgan")
const helmet = require('helmet')
const route = require("../src/api/route/index.route")
const app = express()

// middleware
app.use(morgan("combined"))
app.use(helmet())
app.use(express.json())

//database
require("../src/config/database/database.config")

//route
app.use("/",route)

module.exports = app;