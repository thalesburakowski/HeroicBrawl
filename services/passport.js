const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

// acess the model of users that it already have been created
const User = mongoose.model('users')

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (acessToken, refreshToken, profile, done) =>{
    
    console.log('Profile: ', profile)
    
    new User({googleId: profile.id,
         name: profile.name.givenName,
         lastName: profile.name.familyName}).save()
})) // Adiciona um novo tipo de estrategia pro passport

// não precisa exportar porque ele está esperando pra ser executado