const userServices = require("../../services/users/user.service")

const getUser = (req,res,next) => {
    return userServices.getUser(req,res,next)
}

const getAllUsers = (req,res,next) => {
    console.log(req.body)
    if (req.account.role === "admin"){
        return userServices.getAllUsers(req,res,next)
    }
    else{
        res.status(401).json({
            message : "You can have admin permission to get list user!"
        })
    }
}

const updateInforUser = (req,res,next) => {
    console.log(req.body)
    return userServices.updateInforUser(req,res,next)
}

module.exports = {getUser,getAllUsers,updateInforUser};