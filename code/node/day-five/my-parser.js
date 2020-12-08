const querystring = require("querystring")

let urlencoded = ()=>{
    return (req,res,next)=>{
        let str = ""
        req.on('data',(chunk)=>{
            str +=chunk;
        })
        req.on('end',()=>{
            req.body = querystring.parse(str)
            next();
        })
    }
}

module.exports = {
    urlencoded
}