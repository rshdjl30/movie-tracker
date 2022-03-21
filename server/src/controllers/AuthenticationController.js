// endpoints
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    //generation of token
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
        const user = await User.create(req.body)
        //if successful
        const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            // if there is error or email already exists
            res.status(400).send({
                error: 'This email already exists'
            })
        }
    },
    async login (req, res) {
        try {
            // eslint-disable-next-line no-unused-vars
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            }) //finding for existing user
            if(!user) {
                res.status(403).send({
                    error: 'Login is incorrect'
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid){
                res.status(403).send({
                    error: 'Password is incorrect'
                })
            }

            //if successful
            //adds a token to the user
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            // if there is error or email already exists
            res.status(500).send({
                error: 'Error for logging in'
            })
        }
    }
}