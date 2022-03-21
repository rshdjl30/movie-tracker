module.exports = {
    port: process.env.PORT || 8081,
    db: {
        //sequelizer configuration
        database: process.env.DB_NAME || 'movietracker',
        user: process.env.DB_USER || 'movietracker',
        password: process.env.DB_PASS || 'movietracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './movietracker.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}