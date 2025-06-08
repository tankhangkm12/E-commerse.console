
const productValidation = (req,res,next) => {
    console.log(req.body)
    if (!req.body || Object.keys(req.body).length === 0) return res.status(400).json({
         message : "Let enter product information"
    })
    const {name,description,price,quantity} = req.body

    if (!name || !price || !quantity) return res.status(400).json({
        message : "Not enough information for product"
    })

    next()
}

module.exports = productValidation;