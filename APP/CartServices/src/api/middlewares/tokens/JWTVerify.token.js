const JWT = require("jsonwebtoken")
require("dotenv").config()

const SCRET_KEY = process.env.SCRET_KEY

const JWTVertify = (req,res,next) => {
    const authHeaders = req.headers["authorization"]
    if (!authHeaders) return  res.status(401).json({
        message : "Token not found"
    });
    const token = authHeaders.split(" ")[1]

    JWT.verify(token,SCRET_KEY,(error,account) => {
        if (error) return res.status(403).json({
            message : "Authentication Failed!",
            why : "token error!"
        })

        console.log("Verify token - Account : ",account)
        req.account = account
        console.log(req.account)
        next()
    })
}

module.exports = JWTVertify;