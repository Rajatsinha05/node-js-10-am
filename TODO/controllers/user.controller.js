const User = require("../models/User.schema")

const createUser = async (req, res) => {

    let { email } = req.body
    console.log(req.body);
    
    let isUser = await User.findOne({ email: email })
    if (isUser) {
        res.send({ message: "User already exists" })
    }
    else {
        let data = await User.create(req.body)
        res.send(data)

    }
}

const LoggedIn = async (req, res) => {
    let { email, password } = req.body
    let isUser = await User.findOne({ email: email })
    console.log("isUser: " + isUser);
    if (!isUser) {
       return res.send({ message: "user not found" })
    }

    if (isUser.password !== password) {
     return   res.send({ message: "password is incorrect" })
    }

    res.send({ message: "logged in successfully",User: isUser })

}

module.exports = { createUser, LoggedIn }