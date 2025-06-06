const mongoose = require('mongoose')
require("dotenv").config();

const DATABASE_HOST = process.env.DATABASE_HOST;
console.log("Database host : ",DATABASE_HOST)

const connectDatabase = async () => {
    await mongoose.connect(DATABASE_HOST);
    console.log(`Connect database (HOST : ${DATABASE_HOST}) successfully! `)
}


module.exports = {connectDatabase}