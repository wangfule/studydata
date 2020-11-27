const fs = require('fs');
const path = require('path');

// 定义正则表达式

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 读取数据

fs.readFile(path.join(__dirname,'./index-old.html'),'utf8',(err,dataStr)=>{
    if(err) return console.log("读取HTML失败!"+err.message);

    // console.log(regStyle.exec(dataStr)[0]);
   getCss(dataStr)
   getJs(dataStr)
   getHtml(dataStr)
    
})

function getCss(data) {  
    const cssStr = regStyle.exec(data)[0].replace('<style>',"").replace('</style>','')

    save('./css/index.css',cssStr)

}

function getJs(data) {  
    const jsStr = regScript.exec(data)[0].replace('<script>',"").replace('</script>',"")
    save('./js/index.js',jsStr)
}

function getHtml(data){
   const htmlStr = data.replace(regStyle,'<link rel="stylesheet" href="./css/index.css">').replace(regScript,'<script src="./js/index.js"></script>')

//    console.log(htmlStr);
   save('./index-new.html',htmlStr)
}


function save(adr,con){
    // 获取文件后缀名

    let suf = path.extname(adr).substr(1)

    fs.writeFile(path.join(__dirname,adr),con,err=>{
        if(err) return console.log("写入"+suf+"失败"+err.message);
        console.log("写入"+suf+"成功");
    })
}
