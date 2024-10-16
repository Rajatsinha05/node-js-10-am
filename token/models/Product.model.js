const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  img: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const Product=mongoose.model("Product", productSchema);
module.exports =Product