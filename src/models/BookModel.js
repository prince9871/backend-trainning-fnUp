const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( { //rules
    BookName: {
        type:String,
        unique:true,
        required:true },
    BookAuthor: {
        type:String,
        unique:true },
    Category:  {
        type: String,
        enum: ["english", "romance", "history"] 
    },
    Year: Number,
    
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema) //users



// String, Number
// Boolean, Object/json, array