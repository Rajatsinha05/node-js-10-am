const Product = require("../models/Product.model");
const User = require("../models/user.model");

const create = async (req, res) => {
  let data = await Product.create(req.body);
  let { userId, id } = data;
  let user = await User.findById(userId);
  user.productId.push(id);
  await user.save();
  res.send(data);
};

const getProducts = async (req, res) => {
  let data = await Product.find().populate("userId", "username email");
  res.send(data);
};
module.exports = { create, getProducts };
