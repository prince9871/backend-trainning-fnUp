const batchName = "plutonium" //bydefault node makes private

let printName = function () {
    console.log('batch name is ', batchName)
}

module.exports.name = batchName //if we want to public module.export
module.exports.printName = printName