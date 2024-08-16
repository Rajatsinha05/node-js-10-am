const { Router } = require("express")
const { getUser, createUser } = require("../controllers/user.controller")
const userRouter = Router()
userRouter.get("/",getUser)
userRouter.post("/",createUser)



module.exports=userRouter
