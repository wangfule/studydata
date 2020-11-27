// console.log("hello node.js")

const fs = require('fs');

fs.readFile('./files/6.txt',(err,datastr)=>{
    if(err) return console.log('获取失败'+err.message)
    console.log("获取成功" + datastr);
})