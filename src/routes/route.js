const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")



router.post("/createAuthor", BookController.createAuthor )
router.post("/createBook", BookController.createBook  )
router.get("/byAuthor", BookController.byAuthor  )
router.get("/twoStates", BookController.twoStates  )
router.get("/bookCost", BookController.bookCost  )





//router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
const moment = require('moment');
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');
// // console.log('this is my date of birth 1999',YYYY)
//     let x= dateB.diff(dateA, "year")
//     console.log(x) // #badhia chiz hai moment hai bas

//     res.send({ msg: "all good"})
})

// console.log(Date())
// const moment = require('moment');

module.exports = router;