// 导入express

const express = require('express');

// 创建服务器
const app = express();

// 设置事件监听

app.get('/',(req,res)=>{

    res.send('get请求的响应')
})
app.post('/',(req,res)=>{
    
    res.send("这是post请求的响应")
})

// 启动服务器
app.listen('3000',()=>{
    console.log("http://127.0.0.1:3000");
})