const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

    // let allBooks= await BookModel.find( ).count() // COUNT--number of object

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
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) //end point 5 print that book
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) //point-me kahi  bhi ho dedega
    
    // ASYNC AWAIT
    
    let a= 2+4
    a= a + 10
    console.log(a) //16
    let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    console.log(allBooks)
    let b = 14
    b= b+ 10
    console.log(b)
    res.send({msg: allBooks})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData