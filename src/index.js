const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
var router = express.Router()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


const moment =require('moment')
const time = moment();
app.use(
    function (req,res,next){
        console.log("GLOBAL FUNCTION WORKING")
        console.log(time.format('YYYY,MM,DD')) //2022,08,24
        console.log(time.format('h:mm:ss'))//08,44
        console.log(req.socket.remoteAddress) //::1
        console.log(req.ip)//::1
        console.log(req.originalUrl)//test-me
        console.log("---------END OF FUNCTION------")
       next()
    } 
 )





//  router.all('/basicRoute',function(req,res){
//     console.log("basicRouter page called")
//     res.end();
// })

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
