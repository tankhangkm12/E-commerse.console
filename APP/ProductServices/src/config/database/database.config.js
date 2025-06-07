const mongoose = require("mongoose")
require("dotenv").config()

//DATABASE HOST
const DATABASE_HOST =process.env.DATABASE_HOST;
console.log(DATABASE_HOST)

// signleton pattern
class DataBase{
    constructor(){
        // this.instance = instance => not importance because if not define , JS will create automatic
        this.connect()
    }

    connect(type = "mongodb"){
        mongoose.connect(DATABASE_HOST).then(_ => console.log("Connected MongoDB Success PRO!"))
        .catch(err => console.log("Error Connect ! ",err))
    }

    static  getInstance(){
        if (!DataBase.instance){ // JS will create automatic static variable instance base on class DataBase
            DataBase.instance = new DataBase()
        }
        return DataBase.instance
    }
}

const instanceMongoDB = DataBase.getInstance()

module.exports = instanceMongoDB