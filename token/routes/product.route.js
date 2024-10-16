const { Router } = require("express");
const { create, getProducts } = require("../controllers/Product.controller");

const productRouter = Router();

productRouter.post("/", create);
productRouter.get("/", getProducts);

module.exports = productRouter;
