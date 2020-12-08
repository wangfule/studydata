// 创建启动服务器

const express = require('express');

const app = express();

const router = require("./03-router")

app.use("/api",router)

app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
})