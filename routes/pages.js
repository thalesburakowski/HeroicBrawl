const app = require('express').Router()
const pages = require('../controller/pages')
app.get('/news', pages.news)

app.get('/community', pages.community)

app.get('/galery', pages.galery)

// talvez outro nome pra isso
app.get('/materials', pages.materials)

app.get('/shop', pages.shop)

app.get('/updates', pages.updates)

app.get('/login', pages.login)

module.exports = app