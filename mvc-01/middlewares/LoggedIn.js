const isLoggedIn = (req,res,next) => {
    if(req.user){
        next()
    }
    else{
        res.redirect("/user/login")
    }
}

module.exports = isLoggedIn