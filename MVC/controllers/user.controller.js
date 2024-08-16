const User = require("../models/user.schema")

const getUser = async (req, res) => {
    let data = await User.find()
    res.send(data)
}
const createUser = async (req, res) => {
    let data = await User.create(req.body)
    res.status(201).send(data)
}

module.exports = { getUser,createUser}