var express = require("express");
var router = express.Router();
var {
  books,
  categories,
  authors
} = require("../../senior-frontend-book-listing-assessment/books.json");
/* GET home page. */
router.get("/api/books", function(req, res, next) {
  res.json(books);
});

router.get("/api/categories", function(req, res, next) {
  res.json(categories);
});

router.get("/api/authors", function(req, res, next) {
  res.json(authors);
});

// any add
router.post("/api/*", function(req, res, next) {
  res.status(201).json({
    ok: true,
    // generate random alpha numric Id
    insertId:
      Math.random()
        .toString(36)
        .substr(2, 9) +
      "-" +
      Math.random()
        .toString(36)
        .substr(2, 9)
  });
});

router.put("/api/*", function(req, res, next) {
  res.status(201).json({ ok: true });
});

router.get("/api", function(req, res, next) {
  res.json({
    books,
    categories,
    authors
  });
});

module.exports = router;
