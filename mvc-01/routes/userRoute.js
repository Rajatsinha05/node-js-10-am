const { Router } = require("express")
const User = require("../model/user_schema")
const { getUser, createUser, deleteUser, updateUser, upload, getIndex } = require("../controllers/user.controller")

const userRouter = Router()


userRouter.get("/", getUser)
userRouter.post("/", upload.single("img"), createUser)
userRouter.delete("/:id", deleteUser)
userRouter.patch("/:id", updateUser)


userRouter.post("/upload", upload.single("img"), (req, res) => {
    console.log("req.file", req.file);

    res.send("file uploaded successfully")
})

// index page
userRouter.get("/login", (req, res) => {
    res.render("login");
})
userRouter.get("/index", getIndex)


module.exports = userRouter