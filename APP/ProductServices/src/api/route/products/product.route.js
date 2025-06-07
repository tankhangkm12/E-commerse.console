const express = require("express")
const route = express.Router()

route.get("/concac",(req,res,next)=>{
    res.status(200).json({
        message : "Concac"
    })
})

module.exports = route;