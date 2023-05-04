// DB configurations
const config = {
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.dialect,
    HOST: process.env.HOST,
    PORT: process.env.DB_PORT
}

// export config
module.exports = config;