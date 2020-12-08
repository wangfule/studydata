const fs = require('fs');

fs.readFile('F://./files/3.txt','我是写入的文件',(err)=>{
    if(err) return console.log('写入失败'+err.message)
    console.log("写入成功");
})