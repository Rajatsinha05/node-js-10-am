const mongoose = require('mongoose');

const dbConnect = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/TODO")
    console.log("Connect to MongoDB");

}

module.exports =dbConnect