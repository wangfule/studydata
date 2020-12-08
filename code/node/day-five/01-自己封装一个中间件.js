// 创建一个服务器

const express = require('express');

const app = express();

const parser = require('./my-parser')

// 封装一个中间件

app.use(parser.urlencoded())


app.post('/',(req,res)=>{
    res.send(req.body);
})


app.listen(80,()=>{
    console.log("http://127.0.0.1");
})