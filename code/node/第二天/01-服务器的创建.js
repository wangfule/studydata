const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    res.end('hello world 哈喽 世界')
})

server.listen('80',()=>{
    console.log('runnung at http://127.0.0.1');
})