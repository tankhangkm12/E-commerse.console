const mongoose = require("mongoose")
require("dotenv").config()

const DATABASE_HOST = process.env.DATABASE_HOST

class DataBase{
    constructor(){
        this.connect()
    }

    connect(type = "mongodb"){
        mongoose.connect(DATABASE_HOST).then(_=>console.log("Connect mongoDb success !!!"))
        .catch(err => console.log("Connect failed ! Error : ",err))
    }

    static getInstance(){
        if (!DataBase.instance) DataBase.instance = new DataBase();
        return DataBase.instance;
    }
}

const instanceMongoDb = DataBase.getInstance()

module.exports = instanceMongoDb;