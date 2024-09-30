const { default: mongoose } = require("mongoose")
require("dotenv").config()
const db=async () => {
    await mongoose.connect(process.env.MongoURL)
    console.log("Connected to Mongo");
    
}
module.exports =db