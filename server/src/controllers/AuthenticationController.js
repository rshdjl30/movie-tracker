// endpoints
const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
        const user = await User.create(req.body)
        //if successful
        res.send(user.toJSON())
        } catch (err) {
            // if there is error or email already exists
            res.status(400).send({
                error: 'This email already exists'
            })
        }
    }
}