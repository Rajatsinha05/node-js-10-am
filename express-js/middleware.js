

exports.validator = (req, res, next) => {
    let { title, price, category } = req.body
    console.log(req.body);

    if (!title || !price || !category) {
        res.send("Please enter a title or a category name for the product ")
    }
    else {
        next()
    }

}