const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    let str = `请求的url地址是${req.url},请求的方式${req.method}`

    res.setHeader('Content-Type', "text/html; charset=utf-8")
    // res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str)
})

server.listen('3000',()=>{
    console.log('running at http:127.0.0.1:3000');
})