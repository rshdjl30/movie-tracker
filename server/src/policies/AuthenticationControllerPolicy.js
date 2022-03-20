// input validation or input policies
const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        // validate email and password
        const schema = Joi.object({
            email: Joi.string().min(6).required().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-z0-9]{8,32}$')
            ).required()
        })

        // determine if there is error
        // eslint-disable-next-line no-unused-vars
        const {error, value} = schema.validate(req.body)

        if (error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'Email Invalid'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Password Invalid:
                        <br>
                        1. It must contain ONLY the following: lower case, upper case, and numerics
                        <br>
                        2. It must be at least 8 characters in length and not greater than 32 characters
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid Registration information'
                    })
            }
        }else{
            next()
        }
    }
}