const express = require('express')
const app = express()
const port = process.env.port || 5000

// mongoDB
const mongoose = require('mongoose')
const keys = require('./config/keys')
mongoose.connect(keys.mongoURI)
require('./models/user')

// maybe we need to use express-session
const cookieSession = require('cookie-session')
const passport = require('passport')

// autentication
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./services/passport')
require('./routes/authRoutes')(app)


// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded())


app.listen(port, () => console.log("Running..."))