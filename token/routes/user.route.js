const { Router } = require("express")
const { getUser, createUser, login } = require("../controllers/user.controller")
const isAuth = require("../middleware/auth")

const userRouter = Router()

userRouter.get('/', getUser)
userRouter.post("/signup", createUser)
userRouter.post("/login", login)


module.exports = userRouter