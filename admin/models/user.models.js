const { default: mongoose } = require("mongoose");


const UserSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    isVerified:{type:Boolean, default:false},
    role:{type:String, default:"user"}
})

const User=mongoose.model("User",UserSchema)
module.exports = User