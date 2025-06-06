const express = require("express")
const morgan = require("morgan")
const helmet = require('helmet')
const compression = require("compression")
const database = require("./config/database")

const route = require("./api/route")
const app = express()

// init middleware
app.use(morgan("combined"))
app.use(helmet())
app.use(compression())

// accept use json
app.use(express.json())


//database
database.connectDatabase()
.then((res)=>{
    console.log("Concac")
})
.catch((error)=>{
    console.log("Concu, has error : ",error)
})
//route
app.use("/",route)

module.exports = app;