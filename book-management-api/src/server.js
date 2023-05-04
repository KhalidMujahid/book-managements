// .evn
require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
// const fs = require("fs");

// page not found and error handler file imports
const { pageNotFound, errorHandler } = require("../middlewares/errorHandler");

const logger = require("../libs/logger");
// const morgan = require("morgan");

// routes imports
const bookRouter = require("../routes/book.routes");

// middlewares
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logger
// app.use(morgan("combined",{
//     stream: fs.createWriteStream(path.join(__dirname,"../","logs","log.txt"),"utf8")
// }));

// cors
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// DB connections
const sequelize = require("../config");

(async () => {
  try {
    await sequelize.authenticate().then(() => logger.success("DB connected"));
  } catch (error) {
    console.log(error);
  }
})();

// routes
app.use("/", bookRouter);

// page not found handler
app.use(pageNotFound);

//error handler
app.use(errorHandler);

// export app
module.exports = app;
