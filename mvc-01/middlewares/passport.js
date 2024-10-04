const User = require("../model/user_schema")
const bcrypt = require("bcrypt")
const LocalStrategy = require("passport-local").Strategy
const LocalInitialize = (passport) => {

    passport.use(new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {

        let user = await User.findOne({ email: email })
        if (!user) {
            return done(null, false)
        }
        let isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            return done(null, false)
        }

        return done(null, user)

    }))


}


module.exports = LocalInitialize