const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel= require("../models/BookModel")
const BookController= require("../controllers/BookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData)


let persons = [
    {
      name : "vikram",
      age : 10,
      votingstatus : false
    },
    {
        name : "shyam",
        age : 20,
        votingstatus : false
    },
    {
        name : "prince",
        age : 70,
        votingstatus : false
    },
    {
        name : "Archna",
        age : 5,
        votingstatus : false
    },
    {
        name : "kumkum",
        age : 40,
        votingstatus : false
    }
]

// router.get("/Voting",function(req,res){
//     let InputAge=req.query.Age 
//     let person=[]
//     const eligible= function (){
//         if(persons.age >=InputAge && InputAge >=18){
//             persons.votingstatus=true
//             person.push(persons)
//         }
//     }
//     let Result=persons.map(eligible).filter(persons)
//     console.log(Result)
//})



module.exports = router;