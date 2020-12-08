const express = require('express');
const app = express();

const mw1 = (req,res,next)=>{
    console.log("中间件1");
    next()
}

const mw2 = (req,res,next)=>{
    console.log("中间件2");
    next()
}

app.get('/',mw1,mw2,(req,res)=>{
    res.send('响应了请求')
})

app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
})