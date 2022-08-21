//const { count } = require("console")
const BookModel= require("../models/bookModel")

//book creation
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//show data from selected data--bookname,authorname
const BookList=async function(req,res){
    let allBooks= await BookModel.find().select( { bookName:1,authorName:1,_id:0} )
    res.send({msg:allBooks})
}

//whenever i enter the year the book will be shown and
// byDefault 2021
const getBooksInYear=async function(req,res){
    let years=req.query.year
    let allBooks= await BookModel.find( { year:years}).select({bookName:1,_id:0})
    res.send({msg:allBooks})
}

//whenever i enter the data either author name or year it will shown
const getParticularBooks=async function(req,res){
    let allBooks=await BookModel.find(req.body)
    res.send({msg:allBooks})
}

//data shown only that data published or have pages greater then 500
const getRandomBooks=async function(req,res){
    let allBooks=await BookModel.find({$or:[{isPublished:true},{ Pages: { $gt: 500 }}]}).select({bookName:1,_id:0})
    res.send({msg:allBooks})
}

//show only prices data
const getXINRBooks=async function(req,res){
    let allBooks=await BookModel.find({$in:["100INR","200INR","300INR"]}).select({bookName:1,_id:0})
    res.send({msg:allBooks})
}

//return object elements in bookmodel
const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find().count() // COUNT--number of object
    res.send({msg:allBooks})
}
    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    //--by condition data shown like filter
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT //decending order

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(40 * (page-1)).limit(40)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) //sales ja rahi hu 137 utha lia pura object utha lega
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) //sales != 137 137 not printed
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) //sales>50 jo 50 se bada print
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) //sales<50
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) //sales<=50
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) //sales>=50
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    //                                      define range--sales-10,17,82 unka object                                                
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    //        ---sales dega bas nin wali
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales:100}) // jisme sales<100 that return 1st product
    //  let allBooks= await BookModel.find( {sales: 10}) // only that item return 10
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition //changes kaha karne
    //     { $set: { isPublished: true} } // the change that you want to make-kya karna
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) //starting point Int print that books //CaseSensitive
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) //here i for case insensitive
    // let allBooks= await BookModel.find( { bookName:  /$$/  }) //end point 5 print that book
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) //point-me kahi  bhi ho dedega
    

// }    ({a:/[INR]$/})


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getParticularBooks=getParticularBooks
module.exports.getBooksInYear=getBooksInYear
module.exports.getRandomBooks=getRandomBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.BookList=BookList
