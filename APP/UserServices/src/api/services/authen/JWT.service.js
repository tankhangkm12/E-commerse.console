const JWT = require("jsonwebtoken")
require("dotenv").config()
const SCRET_KEY = process.env.SCRET_KEY
const signToken = (req,res,next) => {
    const {username,password,role} = req.body;
    const token = JWT.sign({username,role},SCRET_KEY,{expiresIn : '15m'})
    return token;
}

module.exports = signToken;