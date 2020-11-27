const http = require('http');
const path = require('path');
const fs = require('fs')

const server = http.createServer();

server.on('request',(req,res)=>{
    console.log(req.url);
    // 声明一个空的变量用来存放路径
    let fpath = ""

    // 当地址只输入/时,手动拼接到index.html
    if(req.url =='/'){
        fpath = path.join(__dirname,"clock/index-new.html")
    }else{
        // 当输入index.html 帮助补全路径
        fpath = path.join(__dirname,"/clock",req.url)
    }
    // 读取路径的文件
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        if(err) return console.log("404 not found");

        // 把读取到的文件响应会客户端
        res.end(dataStr)
    })

})

server.listen('80',()=>{
    console.log('running at http://127.0.0.1');
})