const express = require('express');
const app = express();

const router = require("./03-router");

// 配置jsonp 必须配置到cors的前面
app.get('/index/jsonp',(req,res)=>{
    res.jsonp({name:"zl"});
})


// 配置cors解决跨域问题
const cors = require('cors');
app.use(cors())

// post请求数据转换
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/index',router);

app.listen("3000",()=>{
    console.log("http://127.0.0.1:3000/index/get");
})