const User = require("../models/user.models");
const sendingMail = require("../service/mail");

let otps = new Map();
const createUser = async (req, res) => {
    let { email } = req.body;
    let user = await User.findOne({ email: email })
    if (user) {
        res.send({ email: user.email, msg: "User already exists" })
    }
    else {
        user = await User.create(req.body)
        res.send(user)
        let otp = Math.round(Math.random() * 10000)
        otps.set(email, otp)
        let html = `<h1> ${user.username} , otp : ${otp} </h1> 
             <a href="http://localhost:8090/user/verify/${user.id}/${otp} >Verify your account </a>`
        await sendingMail(email, "account verification", html)
    }

}

const getUser = async (req, res) => {
    let user = await User.find()
    res.send(user)
}

const deleteUser = async (req, res) => {
    let { id } = req.params
    let user = await User.findByIdAndDelete(id)
    res.send(user)
}

// verify otp
const accountVerification = async (req, res) => {
    let { id, otp } = req.params
    let user = await User.findById(id)
    if (!user) {
        res.send("user not found")
    }
    else {
        if (otps.get(user.email) == otp) {
            user = await User.findByIdAndUpdate(id, { isVerified: true })
            res.send("account verified")
        }
        else {
            res.send("invalid otp")
        }
    }
}

module.exports = { createUser, getUser, deleteUser, accountVerification }

