// user model

module.exports = (sequelize, DataTypes) => 
    // creating models, user information
    sequelize.define('User', {
        // attributes
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
        }
    })