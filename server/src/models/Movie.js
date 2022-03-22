
// movie model

module.exports = (sequelize, DataTypes) => {
    // creating models, user information
    const Movie = sequelize.define('Movie', {
        // attributes
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        year: DataTypes.STRING,
        movieImageUrl: DataTypes.STRING,
        trailerLink: DataTypes.STRING
    })

    return Movie
}