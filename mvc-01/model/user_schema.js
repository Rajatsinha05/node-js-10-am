
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profile: []
})

const User = mongoose.model("user", userSchema)

module.exports = User;