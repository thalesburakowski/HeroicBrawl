const passport = require('passport')

// exporta a função que contem as funções, e assim que executada,
// ela ficará ouvindo essas rotas
module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    // ask google for the data of the user 
    app.get('/auth/google/callback', passport.authenticate('google'))

    // get the cookie and kill the id
    app.get('/api/logout', (req, res) =>{
        req.logout()
        res.send(req.user)
    })

    // send the data of current user to '/api/current_user' 
    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
}