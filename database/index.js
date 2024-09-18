const express = require('express');
const db = require('./db');
const User = require('./user.schema');
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {

    let data = await User.find({ username: "react" })
    res.send(data);

})


app.post("/", async (req, res) => {
    let data = await User.create(req.body)
    res.send(data);
});






app.listen(8090, () => {
    console.log("listening on http://localhost:8090");
    db()

})