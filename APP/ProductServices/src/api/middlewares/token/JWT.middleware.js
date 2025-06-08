const JWT = require("jsonwebtoken")
require("dotenv").config()

const SCRET_KEY =  process.env.SCRET_KEY

const authenticateToken = (req,res,next) => {
    const authenHeader = (req.headers["authorization"])
    if (!authenHeader) return  res.status(401).json({
        message : "Token not found"
    });
    const token = authenHeader.split(" ")[1]
    JWT.verify(token,SCRET_KEY,(error,account) => {
        if (error) return res.status(403).json({
            message : "Authentication Failed!",
            why : "token error!"
        })

        req.account = account
        next()
    })

}

module.exports = authenticateToken;