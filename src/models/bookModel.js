const mongoose=require('mongoose')

const BookSchema=new mongoose.Schema({
        name:"Two states",
        author:"61951bfa4d9fe0d34da86829",
        price:50,
        ratings:4.5,
        publisher: "61951bfa4d9fe0d34da84523"  
},{timestamps:true });

module.exports=module.model('newBook',BookSchema)