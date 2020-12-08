const express = require('express')
const app = express();
const session = require("express-session")
const cors = require('cors')
const expressJWT

// 配置cors解决跨域问题
app.use(cors())

// 配置session中间件属性
app.use(session({
    secret:"jiami",
    resave:false,
    saveUninitialized:true
}))

app.use(express.static("./public"))
app.use(express.urlencoded({extended:false}))

// 配置解析token中间件

// 登录post接口
app.post("/login",(req,res)=>{
    // console.log(req.body);
    // 判断账号密码是否正确
    if(req.body.username !=111 && req.body.password !=123){
        return res.send({
            status:1,
            message:"账号或者密码错误"
        })
    }

    // 将登录成功后的用户信息，保存到 Session 中
    req.session.user = req.body;
    req.session.islogin = true;
    console.log(req.session);

    res.send({
        status:0,
        message:"登录成功"
    })
})

// 获取登录用户的信息
app.get('/userinfo',(req,res)=>{
    console.log(req.session);
    // 判断用户的登录状态
    if(!req.session.islogin){
        return res.send({
            status:1,
            message:"未登录,请重新登录"
        })
    }
    res.send({
        status:0,
        message:"获取成功"
    })
})

app.listen(80,()=>{
    console.log("http://127.0.0.1");
})