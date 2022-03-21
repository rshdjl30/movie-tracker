// endpoints
const {Movie} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            //finds in sequelize
            const movie = await Movie.findAll({
                limit: 10
            })
            // returns to the payload
            res.send(movie)
        } catch (err) {
            // if there is error or email already exists
            res.status(500).send({
                error: 'Error fetching songs'
            })
        }
    },
    async post (req, res) {
        try {
            //calls sequelize and creates
            const movie = await Movie.create(req.body)
            res.send(movie)
        } catch (err) {
            // if there is error or email already exists
            res.status(500).send({
                error: 'Error creating songs'
            })
        }
    }
}