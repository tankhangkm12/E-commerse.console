const accountModel = require("../../models/authen/account.model")
const userModel = require("../../models/users/user.model")

//get user
const getUser = async (req,res,next) => {
    const {username}= req.account;
    console.log(username)
    const account  = await accountModel.findOne({username});
    const userID = account.userID;
    console.log(userID)
    const user = await userModel.findOne({userID})
    console.log(user)
    return res.status(200).json(user);
}

//get all users
const getAllUsers = async (req,res,next) => {
    const listAccount = await accountModel.find();
    const data = await Promise.all(
      listAccount.map(async (account) => {
        const user = await userModel.findOne({ userID : account.userID }); // or { _id: account.userID } depending on your schema
        return {
            ...account.toObject(),
            user,
        };
      })
    );
    return res.status(200).json(data);
}

//update user
const updateInforUser = async (req,res,next) => {
    const updateData = req.body;
    console.log(updateData)
    const username = req.account.username;
    const account = await accountModel.findOne({username});
    const userID = account.userID;
    const updateUser = await userModel.findOneAndUpdate(
        {userID},
        {...updateData},
        {new : true}
    )
    console.log(updateUser)
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
        message: "User updated successfully",
        user: updateUser
    })
}

module.exports = {getUser,getAllUsers,updateInforUser};