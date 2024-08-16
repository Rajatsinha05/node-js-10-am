
const express = require('express')
const dbConnect = require('./config/db')
const userRouter = require('./routes/user.route')
const taskRoute = require('./routes/Task.route')
const cors=require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.send({ msg: "node js error" })
})
app.use("/user", userRouter)
app.use("/tasks", taskRoute)
app.listen(8090, () => {
    console.log("listening  on port 8090");
    dbConnect()
})