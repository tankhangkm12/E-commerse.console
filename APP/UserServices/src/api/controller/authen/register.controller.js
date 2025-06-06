const registerService = require("../../services/authen/register.service")

const register = (req,res,next) => {
    return registerService(req,res,next);
}

module.exports =register;