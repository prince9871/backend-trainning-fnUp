const productModel = require("../models/productModel")
const UserModel= require("../models/userModel")

//creating the user
const createUser= async function (req, res) {
    let data= req.body   
    let token= req.headers.isfreeappuser
     data.isFreeAppUser = token
    let allData= await UserModel.create(data)
    res.send({msg: allData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    let allUsers1= await productModel.find()
    res.send({msg: allUsers,allUsers1})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData









    //Get all headers from request
//     console.log("Request headers before modificatiom",req.headers)
//     //Get a header from request
//     console.log(req.headers.batch)
//     console.log(req.headers["content-type"])
//     console.log(tokenDataInHeaders)
//     //Set a header in request
//     req.headers['month']='June' //req.headers.month = "June"

//     //Set an attribute in request object
//     req.anything = "everything"
    
    
//     console.log("Request headers after modificatiom",req.headers)
    
//     //Set a header in response
//     res.header('year','2022')
//     res.send({msg: "Hi"})
// }



