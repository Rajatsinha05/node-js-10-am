const jwt = require("jsonwebtoken")
const isAuth = async (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1];

        if (!token) {
            res.status(403).send({ message: "token not exists" })
        }
        else {
            try {
                let decode = await jwt.verify(token, "private-key")
                if (decode) {
                    req.body.userId=decode.id
                    next()
                }
                else {
                    res.status(403).send({ message: "token not valid" })
                }
            } catch (error) {
                return res.send({ message: "error verifying token " });
            }

        }
    } catch (error) {
        return res.send({ message: "token not exists" });
    }


}


module.exports = isAuth