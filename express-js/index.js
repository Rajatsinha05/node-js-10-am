const express = require('express');
const { validator } = require('./middleware');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded());
let db = []

app.get("/", (req, res) => {

    let { category, price } = req.query

    if (category) {
        let temp = db.filter((ele) => ele.category == category)

        if (price) {
            temp = temp.filter((ele) => ele.price <= price)
        }
        return res.send(temp)
    }
    res.send(db);
})


app.post("/create", validator, (req, res) => {
    let { title, price, category } = req.body;

    let data = {
        id: Date.now(),
        title,
        price,
        category
    }
    db.push(data);
    res.send(data)
})



app.delete("/:id", (req, res) => {
    let { id } = req.params
    let data = db.filter((item) => item.id != id)
    db = data
    res.send(data)
})



app.patch("/:id", (req, res) => {
    let { id } = req.params

    // let data = db.map((ele) => ele.id == id ? { ...ele, ...req.body } : ele)
    let index = db.findIndex((ele) => ele.id == id)
    db[index] = { ...db[index], ...req.body }

    res.send(db)
})

// files
app.get("/index", (req, res) => {

    // res.sendFile(__dirname+'/index.html')
    res.sendFile(path.join(__dirname, "index.html"))
})


app.listen(8090, () => {
    console.log("  listening on port http://localhost:8090");

})


