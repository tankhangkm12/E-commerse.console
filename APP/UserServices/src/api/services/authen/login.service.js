const JWTService = require("./JWT.service");
const accountModel = require("../../models/authen/account.model")
const bcrypt = require("bcrypt")

const login = async (req,res,next) => {
    const {username,password} = req.body;
    const account = await accountModel.findOne({username})
    console.log(account)
    if (!account){
        return res.status(401).json({
            message : "Account not found!"
        })
    }
    const isCorrectPassword = await bcrypt.compare(password,account.password);
    if (!isCorrectPassword){
        return res.status(401).json({
            message : "Incorect Password!"
        })
    }
    req.body = {
        username,
        password,
        role : account.role
    }
    const token = JWTService(req,res,next);
    return res.status(200).json({token})
}

module.exports = login;