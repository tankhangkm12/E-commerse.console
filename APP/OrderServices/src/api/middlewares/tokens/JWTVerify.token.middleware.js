const JWT = require("jsonwebtoken")
require("dotenv").config()

const SCRET_KEY = process.env.SCRET_KEY

const JWTVerify = (req,res,next) =>{
    if (!req.headers["authorization"]) return res.status(400).json({
        message : "No have token !!!"
    })
    const token = req.headers["authorization"].split(" ")[1]
    
    JWT.verify(token,SCRET_KEY,(err,account)=>{
        if (err) return res.status(400).json({
            message : "Incorrect token !!!"
        })

        req.account = account;
        next()

    })
}

module.exports = JWTVerify;