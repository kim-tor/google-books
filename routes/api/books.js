const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// matches with "/api/books"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

// matches with "/api/books/:id"
router
.route("/:id")
.get(booksController.findById)
.delete(booksController.remove);

module.exports = router;
