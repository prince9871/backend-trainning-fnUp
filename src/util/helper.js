// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. 
//For example - Radon, W3D3, the topic for today is Nodejs module system’

function printDate(){
    var day = (new Date()).getDate();
    console.log('Current Date is :',day);
}

function printMonth(){
    var month = (new Date()).getMonth()+1;
    console.log('Current Month is :',month);
}

function getBatchInfo(){
    var batchName="Plutonium"
    var weekday="W2D3"
    var Topic="Nodejs Module System"
    console.log(batchName,",",weekday,',',"The Topic For Today Is",Topic)
}

module.exports.TodayDay=printDate
module.exports.TodayMonth=printMonth
module.exports.BatchDetails=getBatchInfo

