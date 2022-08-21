const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/AuthorController")
const BookController= require("../controllers/bookController")
const PublisherController= require("../controllers/publisherController")


//AuthorApis
router.post("/createAuthor", AuthorController.createAuthor  )
router.get("/getAuthorsData", AuthorController.getAuthorsData)

//BookApis
router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData)
router.post("/HandleBookError", BookController.HandleError)
router.get("/FetchBookData", BookController.FetchData)
router.get("/UpdateBookValue", BookController.UpdateValue)
router.put("/RatingBookPrice", BookController.RatingPrice)



//PublisherApis
router.post("/createPublisher", PublisherController.createPublisher  )
router.get("/getPublishersData", PublisherController.getPublishersData)



module.exports = router;