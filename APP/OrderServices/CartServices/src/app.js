const express = require("express")
const morgan = require("morgan")
const helmet = require('helmet')
const app = express()
app.use(morgan("combined"))
app.use(helmet())

app.get("/concac",(req,res,next)=>{
    res.send("Concac")
})

module.exports = app;