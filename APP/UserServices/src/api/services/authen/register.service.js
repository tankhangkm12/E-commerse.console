const accountModel = require("../../models/authen/account.model");
const userModel = require("../../models/users/user.model")
const bcrypt = require("bcrypt")
const {v4 : uuidv4} = require("uuid")
const register = async (req,res,next) => {
    const {username,password,role} = req.body; 
    const existing = await accountModel.findOne({username});
    if (existing) return res.status(400).json({
        message: "Account already used" 
    })

    // encoding password
    const saltRounds = 10 // more saltRounds = more sercure
    const passwordEncode = await bcrypt.hash(password,saltRounds) 

    const userID = uuidv4()
    const user = new userModel({
        userID,
        name :"Not Found!",
        email : "Not Found!",
        age : 0
    });
    await user.save()
    const account = new accountModel({
        username,
        password : passwordEncode,
        userID : userID,
        role :role ? role : "user"
    })
    await account.save();
    return res.status(201).json({ message: "Account registered successfully" })
} 

module.exports = register;
