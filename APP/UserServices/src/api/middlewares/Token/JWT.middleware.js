const JWT = require("jsonwebtoken")
require("dotenv").config()

const SCRET_KEY = process.env.SCRET_KEY

const authenticateToken = (req,res,next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);
    JWT.verify(token,SCRET_KEY,(error,account)=>{
        if (error) return res.status(403).json({
            message : "Authentication Failed!",
            why : "token error!"
        })
        req.account = account
        console.log("Account : ",account)
        next()
    })
}

module.exports = authenticateToken;