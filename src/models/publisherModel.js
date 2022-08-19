const mongoose=require('mongoose')

const PublisherSchema=new mongoose.Schema({
        name: String,
        headQuarter:String    
},{timestamps:true });

module.exports=module.model('newPublisher',PublisherSchema)