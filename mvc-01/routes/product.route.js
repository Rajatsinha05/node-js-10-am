const {Router}=require("express")
const { getAddProductPage, getProductsPage, createProduct, getProductsByUserId, getProducts } = require("../controllers/product.controller")
const isAuth = require("../middlewares/auth")
const { upload } = require("../controllers/user.controller")

const ProductRouter=Router()

// view section
ProductRouter.get("/create",isAuth,getAddProductPage)
ProductRouter.get("/",isAuth,getProductsPage)


// api 

ProductRouter.post("/",isAuth,upload.single("img"),createProduct)
ProductRouter.get("/all",isAuth,getProducts)
ProductRouter.get("/id",isAuth,getProductsByUserId)

module.exports =ProductRouter