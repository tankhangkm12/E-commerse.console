

const validationAddOrder = (req,res,next) => {
    if (!req.body) return res.status(400).json({
        message : "No data body !!"
    })
    const {shippingAddress} = req.body
    if (!shippingAddress) return res.status(400).json({
        message : "No have shipping address !!!"
    })
    next()
}

module.exports = validationAddOrder