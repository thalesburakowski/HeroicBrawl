const news = (req, res) => {
    res.render('news')
}

const community = (req, res) => {
    res.render('community')
}

const galery = (req, res) => {
    res.render('galery')
}

const materials = (req, res) => {
    res.render('materials')
}

const shop = (req, res) => {
    res.render('shop')
}

const updates = (req, res) => {
    res.render('updates')
}

const login = (req, res) => {
    res.render('login')
}

module.exports = {news, community, galery, materials, shop, login}