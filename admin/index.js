const express = require('express');
const db = require('./config/db');
const { userRouter } = require('./routes/user.route');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Welcome to the error")
})

app.use("/user",userRouter)
app.get("*", (req, res)=>{
    res.send("invalid request")
})
app.listen(8090, () => {
    console.log("listening on  port 8090");
    db()

})