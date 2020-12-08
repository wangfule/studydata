

const express = require("express");

const app = express();

// 导入路由模块
const router = require("./router")

app.use("/api",router)


app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
})