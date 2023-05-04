const { Router } = require("express");
// import user controller
const bookController = require("../controllers/book.controllers");

const bookRouter = Router();

// get all users
bookRouter.get("/", bookController.getAllBook);

// add new user
bookRouter.post("/add",bookController.addNewBook);

// get one user
bookRouter.get("/:id",bookController.getOneBook);

// update single user
bookRouter.put("/:id",bookController.updateSingleBook);

// delete single user
bookRouter.delete("/:id",bookController.deleteSingleBook);

module.exports = bookRouter;