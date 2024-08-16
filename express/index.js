const express = require('express')

const app = express()

app.get("/node", (req, res) => {
    res.send("Welcome to the Node Lecture ")
})

app.get("/", (req, res) => {
    res.send("Welcome to the index page")
})

app.get("/js", (req, res) => {
    res.send("Welcome to the JavaScript");
});

app.listen(8090, () => {
    console.log("listening on http://localhost:8090");
})