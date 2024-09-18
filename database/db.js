const { connect } = require("mongoose")

const db = async () => {

    await connect("mongodb://localhost:27017/db")
    console.log("connection established");
    
}

module.exports = db