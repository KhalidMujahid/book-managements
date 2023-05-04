const { Sequelize } = require("sequelize");
// import DB config
const config = require("../config/config");

// Connecting to DB
const sequelize = new Sequelize(config.DB,config.USER,config.PASSWORD,{
    dialect: config.dialect,
    host: config.HOST,
    port: config.PORT,
});

// export
module.exports = sequelize;
