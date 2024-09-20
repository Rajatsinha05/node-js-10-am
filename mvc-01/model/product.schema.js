const { default: mongoose } = require("mongoose");


const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    img: String,
    userId: String,
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product