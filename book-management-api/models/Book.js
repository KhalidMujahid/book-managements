// DB data types
const { DataTypes } = require("sequelize");
// import db config
const db = require("../config");

// User schema
const Book = db.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// export Book schema
module.exports = Book;
