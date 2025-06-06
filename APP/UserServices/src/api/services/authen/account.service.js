const accountModel = require("../../models/authen/account.model")
const userModel = require("../../models/users/user.model")
const bcrypt = require("bcrypt")


// update account -> change password
const updateAccount = async (req,res,next) => {
    const username = req.account.username;
    const {password,newPassword} = req.body
    console.log(req.body)
    const account = await accountModel.findOne({username})
    if (!account) return res.status(404).json({ message: "Account not found!" });
    const isCorrectPassword = await bcrypt.compare(password,account.password)
    if (!isCorrectPassword) return res.status(401).json({
        message : "Incorect password !"
    })
    if (password === newPassword) return res.status(402).json({
        message : "newpassword must not like old password!"
    })
    const saltRounds = 10;
    const newHashPassword = await bcrypt.hash(newPassword,saltRounds)
    account.password = newHashPassword;
    await account.save()
    return res.status(200).json({
        message : "Update password successfull !",
        account : account
    })
}

const removeAccount = async (req,res,next) => {
    const username = req.account.username;
    const password = req.body.password;
    const account = await accountModel.findOne({username});
    if (!account) return res.status(404).json({ message: "Account not found!" });
    const isCorrectPassword = await bcrypt.compare(password,account.password)
    if (!isCorrectPassword) return res.status(401).json({
        message : "Incorect password !"
    })
    const userID = account.userID;
    await userModel.deleteOne({userID});
    await accountModel.deleteOne({username})

    return res.status(200).json({ message: "User and account deleted" });
}


module.exports = {updateAccount,removeAccount}