const User = require("../model/user_schema")
const bcrypt = require("bcrypt")
const LocalStrategy = require("passport-local").Strategy
const LocalInitialize = (passport) => {
    passport.use(new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {


        try {

            let user = await User.findOne({ email: email })
          

            if (!user) {
                return done(null, false)
            }
            let isMatched = await bcrypt.compare(password, user.password)
          

            if (!isMatched) {
                return done(null, false)
            }


            return done(null, user)
        } catch (error) {
            console.log("error", error);

            return done(error, false)
        }

    }))

    passport.serializeUser((user, done) => {
  
        return done(null, user.id)
    })

    passport.deserializeUser(async (id, done) => {
        let user = await User.findById(id)
        return done(null, user)
    })
}


module.exports = LocalInitialize