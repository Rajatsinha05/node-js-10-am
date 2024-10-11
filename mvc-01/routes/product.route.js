const {Router}=require("express")
const { getAddProductPage, getProductsPage, createProduct, getProductsByUserId, getProducts } = require("../controllers/product.controller")
const isAuth = require("../middlewares/auth")
const { upload } = require("../controllers/user.controller")
const isLoggedIn = require("../middlewares/LoggedIn")

const ProductRouter=Router()

// view section
ProductRouter.get("/create",isLoggedIn,getAddProductPage)
ProductRouter.get("/",isLoggedIn,getProductsPage)


// api 

ProductRouter.post("/",isLoggedIn,upload.single("img"),createProduct)
ProductRouter.get("/all",isLoggedIn,getProducts)
ProductRouter.get("/id",isLoggedIn,getProductsByUserId)

module.exports =ProductRouter