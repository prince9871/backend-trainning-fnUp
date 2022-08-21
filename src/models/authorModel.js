const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id:{type:Number,required:true,unique:true},
    author_name:String,
    age:Number,
    address:String
}, { timestamps: true });
//is a struucture of the document 
//model--interface provide that can manipulation 
//this provide a environment to create manipulation and make to to database
//create update delete
//provide interface b/w databse for creating queries for manipulation
module.exports = mongoose.model('Authr', authorSchema) 
