// hashing the password
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// eslint-disable-next-line no-unused-vars
function hashPassword (user, options) {
    //hashes the user password
    const SALT_FACTOR = 8
    if (!user.changed('password')) {
        return;
    }
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}
// user model

module.exports = (sequelize, DataTypes) => {
    // creating models, user information
    const User = sequelize.define('User', {
        // attributes
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
        }, 
    }, {
        hooks: {
            // call before creating and updating
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            //maybe error later
            //beforeSave: hashPassword 
        }
    })

    User.prototype.comparePassword = function (password) {
        // compare hashed password
        return bcrypt.compareAsync(password, this.password)
    }
    return User
}