const accountServices = require("../../services/authen/account.service")


const updateAccount = (req,res,next) => {
    return accountServices.updateAccount(req,res,next);
}

const removeAccount =(req,res,next) => {
    return accountServices.removeAccount(req,res,next);
}

module.exports = {updateAccount,removeAccount};