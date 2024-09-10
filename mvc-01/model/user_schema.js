
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    psw: String,
})

const User = mongoose.model("user", userSchema)

module.exports = User;