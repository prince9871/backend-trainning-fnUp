const PublisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let data= req.body
    let savedData= await PublisherModel.create(data)
    res.send({msg: savedData})
}

const getPublishersData= async function (req, res) {
    let allPublishers= await PublisherModel.find()
    res.send({msg: allPublishers})
}

module.exports.createPublisher= createPublisher
module.exports.getPublishersData= getPublishersData