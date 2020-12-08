// 路由模块

const express = require('express');

const router = express.Router();


router.get('/user',(req,res)=>{
    res.send('ok!!!!')
})
router.get('/index.html',(req,res)=>{
    res.send("index页面")
})


module.exports = router;