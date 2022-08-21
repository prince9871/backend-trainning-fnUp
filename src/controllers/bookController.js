const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

//data creation of author
const createAuthor= async function (req, res) {
    let data= req.body
//
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

//data creation of book
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//get objects by authorName and Author Id
const byAuthor = async function (req, res) {
    let name1 = await BookModel.find({ authorName:  "Chetan Bhagat" , author_id : 1 })
    return res.send({ msg: name1 })
}

//update the price where name match
//show selected element whose author id matched
const twoStates = async function (req, res) {
    let newname = await BookModel.findOneAndUpdate({ name:  "Two states"}, {$set : {price :100}}, {new : true})
   let value = newname.author_id
   let price = newname.price
   console.log(value)
    let result = await AuthorModel.find( {author_id :value}).select({author_name :1 , price :1})
    return res.send({ msg: result,price })
}

//get author id whose price between 50 to 100 
//show author name of selected id whoose data b/w 50-100
const bookCost = async function (req,res) {
    let value = await BookModel.find({ price :{ $gte :50}, price : {$lte :100}}).select({author_id :1})

    let result = value.map( alldata => alldata.author_id)
    let finalresult = await AuthorModel.find({author_id : result}).select({author_name :1, _id :0})
    res.send({msg : finalresult})
}



// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// DELETE




module.exports.createAuthor=createAuthor
module.exports.createBook= createBook
module.exports.byAuthor= byAuthor
module.exports.twoStates= twoStates
module.exports.bookCost= bookCost

byAuthor

// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks



