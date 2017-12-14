const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

// access the model of users that it already have been created
const User = mongoose.model('users')

passport.serializeUser((user,done) =>{
    done(null, user.id)
})

// parameter: id -> the user.id from serializeUser
passport.deserializeUser((id, done) =>{
    User.findById(id).then(user => {
            done(null, user)
        })
})

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (acessToken, refreshToken, profile, done) =>{
    
    console.log('Profile: ', profile)
    User.findOne({ googleId: profile.id})
        .then(existingUser =>{
            if(existingUser){
                // profile already exists
                done(null, existingUser )
            }else{
                new User({googleId: profile.id,
                    name: profile.name.givenName,
                    lastName: profile.name.familyName}).save()
                    .then(user => done(null, user))
            }
        })

    
})) // add a new type of strategy to passport 

// don't need to export beucase it is waiting to be executed