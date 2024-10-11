const User = require("../models/user.model");
const jwt = require("jsonwebtoken")
const createUser = async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        user = await User.create(req.body);
        let data = {
            id: user.id,
            email: user.email,
            username: user.username
        }
        let token = await jwt.sign(data, "private-key")


        return res.send({ msg: " successful", token: token });

    } else {
        res.send({ email: user.email, user: "user already exists" });
    }
};

const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.send({ user: "user not found" });
        }

        if (user.password !== password) {
            return res.send({ user: "password incorrect" });
        }
        let data = {
            id: user.id,
            email: user.email,
            username: user.username
        }
        let token = await jwt.sign(data, "private-key")


        return res.send({ msg: "login successful", token: token });
    } catch (error) {
        res.send(error.message);
    }
};

const getUser = async (req, res) => {
    let users = await User.find()
    res.send(users)
}

module.exports = { createUser, getUser, login }