const router = require("express").Router();
const bookRoutes = require("./books");

// book routes
router.use("/books", bookRoutes);

module.exports = router;