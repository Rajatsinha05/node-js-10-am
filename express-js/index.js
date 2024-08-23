const express = require('express');

const app = express();
app.use(express.json());
let db = []

app.get("/", (req, res) => {
    res.send(db);
})


app.post("/create", (req, res) => {
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





app.listen(8090, () => {
    console.log("  listening on port http://localhost:8090");

})


