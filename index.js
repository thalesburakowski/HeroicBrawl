const express = require('express')
const app = express()
const port = process.env.port || 3000

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded())

app.set('view engine', 'ejs')
app.use(express.static('/views'))

const routes = require('./routes') // ele pega o index.js por padrão
app.use(routes)

app.use(express.static(__dirname + '/views'))

app.listen(port, () => console.log("Running..."))