const http = require('http');

const server = http.createServer()

server.on('request',(req,res)=>{
    console.log(req,res);
})
server.listen(80,()=>{
    console.log("running");
})