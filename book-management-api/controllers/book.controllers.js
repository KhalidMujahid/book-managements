// User modal import
const Book = require("../models/Book");

// Validtion import
const validate = require("../libs/validation");

const bookController = {
  // get all books from DB
  getAllBook: async (req, res, next) => {
    try {
      await Book.findAll()
        .then(books => {
          res.status(200).send(books);
        })
        .catch(error => {
          res.status(404).send(error.original.sqlMessage);
        });
    } catch (error) {
      next(error.message);
    }
  },
  // Add new book
  addNewBook: async (req, res, next) => {
    try {
      // validation
      const { error } = validate.validate(req.body);

      if (error) {
        return res.status(422).send(error.details[0].message);
      }

      await Book.create(req.body)
        .then(data => {
          res.status(201).send(data);
        })
        .catch(error => {
          res.status(400).send(error.message);
        });
    } catch (error) {
      next(error.message);
    }
  },
  // get one book
  getOneBook: async (req, res, next) => {
    try {
      await Book.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(book => {
          book
            ? res.status(200).send(book)
            : res
                .status(404)
                .send(`Book with this id: ${req.params.id} not found!`);
        })
        .catch(error => {
          res.status(400).send(error.message);
        });
    } catch (error) {
      next(error.message);
    }
  },
  // update book
  updateSingleBook: async (req, res, next) => {
    try {
      // validation
      const { error } = validate.validate(req.body);

      if (error) {
        return res.status(422).send(error.details[0].message);
      }

      await Book.update(req.body,
        {
          where: {
            id: req.params.id
          }
        }
      )
        .then(book => {
          book[0] !== 0
            ? res.status(200).send("Book updated")
            : res
                .status(400)
                .send(`Book with this ID:${req.params.id} not found!`);
        })
        .catch(error => {
          res.status(400).send(error.message);
        });
    } catch (error) {
      next(error.message);
    }
  },
  // delete book
  deleteSingleBook: async (req, res, next) => {
    try {
      await Book.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(done => {
          done
            ? res.status(200).send("Book deleted")
            : res
                .status(200)
                .send(`Book with this ID: ${req.params.id} not found!`);
        })
        .catch(error => {
          res.status(400).send(error.message);
        });
    } catch (error) {
      next(error.message);
    }
  }
};

module.exports = bookController;
