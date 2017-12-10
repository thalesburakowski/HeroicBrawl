const express = require('express')
const app = express()
const port = process.env.port || 3000

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded())

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => console.log("Running..."))