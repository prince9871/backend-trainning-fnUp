//- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
//- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
//- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]
function trim(){
    console.log("   Prince Soni   ".trim())
}

function changetoLowerCase(){
    console.log("Prince Soni".toLowerCase())
}

function changeToUpperCase(){
    console.log("Prince Soni".toLocaleUpperCase())
}

module.exports.trim=trim
module.exports.lower=changetoLowerCase
module.exports.upper=changeToUpperCase