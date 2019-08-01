var express = require("express");
var router = express.Router();
var {
  books
} = require("../../senior-frontend-book-listing-assessment/books.json");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.send(books);
});

module.exports = router;
