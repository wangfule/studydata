const express = require('express');

const app = express();

// 定义一个中间件  
// 没有next就没有办法继续运行后面的路由或者中间件 
//  与后面的路由或者中间件共享一个req和res
let flag = false;
app.use((req,res,next)=>{
    console.log('这是一个中间件');
    if(flag){
        res.send('来的真不是时候~')
        return;
    }else{
        req.say = {
            s1:"来玩呀!!!!"
        };
        next();
    }
})

app.get('/',(req,res)=>{
    // res.send("haha ")
    res.send(req.say)
})

app.listen(80,()=>{
    console.log("http://127.0.0.1");
})