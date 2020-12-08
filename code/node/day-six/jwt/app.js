const express = require('express')
const app = express();
const session = require("express-session")
const cors = require('cors')

const tokenJWT = require("jsonwebtoken")
const expressJWT = require("express-jwt")

// 配置cors解决跨域问题
app.use(cors())

app.use(express.urlencoded({extended:false}))

// 配置解析token中间件
// app.use(expressJWT({secret: "nice and nice"}).unless({path: [/^\/api\//]}));
app.use(expressJWT({secret: "nice and nice",algorithms:['HS256']}).unless({path: [/^\/api\//] }))


// 登录post接口
app.post("/api/login",(req,res)=>{
    // console.log(req.body);
    const user = req.body;
    console.log(user);
    // 判断账号密码是否正确
    if(user.username !=111 && user.password !=123){
        return res.send({
            status:1,
            message:"账号或者密码错误"
        })
    }
    
    let token = tokenJWT.sign(user,"nice and nice",{expiresIn:"60s"})
    // console.log(token);

    res.send({
        status:0,
        message:"登录成功",
        Authorization:"beaere "+token
    })

})

// 获取登录用户的信息
app.get('/userinfo',(req,res)=>{
    // console.log(123);
    res.send({
        status: 200,
        message: '获取用户信息成功！',
        // data: req.user, // 要发送给客户端的用户信息
      })
})

app.use(function (err,req,res,next) {  
    console.log(err);

    next();
})

app.listen(80,()=>{
    console.log("http://127.0.0.1");
})