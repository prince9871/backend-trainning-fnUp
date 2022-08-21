const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData)
router.post("/getParticularBooks", BookController.getParticularBooks)
router.post("/getBooksInYear", BookController.getBooksInYear)
router.get("/getRandomBooks", BookController.getRandomBooks)
router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getBookList", BookController.BookList)

module.exports = router;