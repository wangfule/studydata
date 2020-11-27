const http = require("http")

const server = http.createServer();

server.on('request',(req,res)=>{
    res.setHeader("Content-Type","text/html; charset=utf-8")

    res.end('你好啊')
})
server.listen('80',()=>{
    console.log('running at http://127.0.0.1');
})