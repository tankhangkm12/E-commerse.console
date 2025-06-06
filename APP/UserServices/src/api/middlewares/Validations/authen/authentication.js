
const authen = (req,res,next) => {
    const {username,password} = req.body;
    if (!username || !password) return res.send("Invalid account!");
    else next();
}

module.exports = authen;