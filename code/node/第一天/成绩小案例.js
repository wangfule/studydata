const fs = require('fs');

fs.readFile('./files/成绩.txt','utf8',(err,dataStr)=>{
    if(err) return console.log("文件读取失败"+err.message);

    const arrold = dataStr.split(' ')
    // console.log(arrold);
    const arrnew = [];
    arrold.forEach(item => {
        arrnew.push(item.replace('=',": "))
    });
    // console.log(arrnew);
    const str =arrnew.join('\r\n');
    console.log(str);
    fs.writeFile('./files/成绩-ok.txt',str,err=>{
         if(err) return console.log("文件写入失败"+err.message);
        console.log("文件写入成功!");
    })
})