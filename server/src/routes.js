const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const MoviesController = require('./controllers/MoviesController')
module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
    app.post('/login', AuthenticationController.login)
    app.get('/movies', MoviesController.index)
    app.post('/movies', MoviesController.post)
}