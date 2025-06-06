const loginService = require("../../services/authen/login.service")

const login = (req,res,next) => {
    return loginService(req,res,next);
}

module.exports =login;