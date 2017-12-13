const passport = require('passport')

// exporta a função que contem as funções, e assim que executada,
// ela ficará ouvindo essas rotas
module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    app.get('/auth/google/callback', passport.authenticate('google'))
}