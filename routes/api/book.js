const router = require("express").Router();
const booksController = require("../../controller/booksController");

// matches with "/api/books"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

// matches with "/api/books/:id"
router
.route("/:id")
.get(booksController.findById)
.delete(booksControler.remove);

module.exports = router;
