let axios = require("axios")

let memeHandler = async function (req, res) {
    try {
        let t1=req.query.text0
        let t2=req.query.text1
        let id=req.query.template_id
        let u=req.query.username
        let p=req.query.password

        var options = {
            method: "get",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${t1}&text1=${t2}&username=${u}&password=${p}`
        }

        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.memeHandler=memeHandler