const express = require('express')
const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views'))

const routes = require('./routes') // ele pega o index.js por padrão
app.use(routes)

// mongoDB
const mongoose = require('mongoose')
const keys = require('./config/keys')
mongoose.connect(keys.mongoURI)
require('./models/user')


require('./services/passport')
require('./routes/authRoutes')(app)


// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded())


app.listen(port, () => console.log("Running..."))