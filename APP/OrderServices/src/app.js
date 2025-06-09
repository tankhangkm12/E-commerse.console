const express = require("express")
const morgan = require("morgan")
const helmet = require('helmet')
const route = require("./api/route/index.route")

const app = express()

//middleware
app.use(morgan("combined"))
app.use(helmet())
app.use(express.json())


//database
require("../src/config/databases/database.config")

//route
app.use("/",route)

module.exports = app;