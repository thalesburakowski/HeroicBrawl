const app = require('express').Router()
const pages = require('./pages')

app.get('/', (req, res) => {
    res.render('index')
})

app.use(pages)

module.exports = app