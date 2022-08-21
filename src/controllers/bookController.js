const mongoose = require('mongoose')
const AuthorModel = require('../models/authorModel')
const PublisherModel = require('../models/publisherModel')

const { findById } = require('../models/bookModel')
const ObjectId = mongoose.Schema.Types.ObjectId
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data) //save
    res.send({ msg: savedData })
}

//getData
const getBooksData = async function (req, res) {
    let allBooks = await BookModel.find()
    res.send({ msg: allBooks })
}

//for checking author present or not
const HandleError = async function (req, res) {
    let data = req.body
    let authord = data.authorId
    let publisherd = data.publisherId
    let isValid = mongoose.Types.ObjectId.isValid(authord)
    let isValidp = mongoose.Types.ObjectId.isValid(publisherd)
    if (!authord || !publisherd) return res.send({ msg: "Enter author_id and publisher_id" })
    if (isValid === false) {
        return res.send("Invalid length of author_id")
    } else if (isValidp === false) {
        return res.send("Invalid length of publisher id ")
    }
    let result = await AuthorModel.findById(authord)
    let result2 = await PublisherModel.findById(publisherd)
    console.log(result, result2)
    if (!result || !result2) {
        return res.send({ msg: "Enter valid author_id or publisher_id" })
    }
    else {
        let finalData = await BookModel.create(data)
        return res.send({ msg: finalData })
    }
}





//for get author and publisher data
const FetchData = async function (req, res) {
    let Data = await BookModel.find().populate('authorId').populate('publisherId')
    res.send({ msg: Data })
}


//for update values 
const UpdateValue = async function (req, res) {
    let Value = await PublisherModel.find({ name: ['Penguin', 'HarperCollins'] }).select({ _id: 1 })
    let value2 = await BookModel.updateMany({ publisherId: Value }, { $set: { isHardCover: true, new: true } })
    res.send({ msg: value2 })
}

const RatingPrice = async function (req, res) {
    let Value3 = await AuthorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let Value4 = await BookModel.updateMany({ authorId: Value3 }, { $inc: { price: +10 } }, {new: true})
    res.send({ msg: Value4 })
}
module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.HandleError = HandleError
module.exports.FetchData = FetchData
module.exports.UpdateValue = UpdateValue
module.exports.RatingPrice = RatingPrice
