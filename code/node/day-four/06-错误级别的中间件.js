const { error } = require('console');
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    throw new Error("服务器发生了错误")
    res.send('响应了请求!')
})

app.use((err,req,res,next)=>{
    console.log(err.message);
    res.send(err.message)
})

app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
})