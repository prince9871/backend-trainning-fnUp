const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const BookSchema = new mongoose.Schema({
        name:String,
        authorId: { type: ObjectId, ref:"newAuthor"}, //all data
        price: Number,
        ratings:Number,
        publisherId: { type: ObjectId, ref:"newPublisher"},
        isHardCover:{type:Boolean,default:false}
}, { timestamps: true });

module.exports = mongoose.model('newBook', BookSchema)