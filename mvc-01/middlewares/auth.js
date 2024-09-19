const isAuth = (req, res, next) => {
    let { id } = req.cookies
    if (id) {
        return next()
    }
    else {
        return res.redirect("/user/login")
    }
}

module.exports =isAuth