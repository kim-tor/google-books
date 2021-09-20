const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google")

// book routes
router.use("/books", bookRoutes);

// google bookRoutes
router.use("/google", googleRoutes);

//for anything else render the html page
router.use(function(req,res) {
    res.sendFile(path.join(__dirname,"../../client/build/index.html"))
})
module.exports = router;