// 路由模块

const express = require("express");

const router = express.Router();

const fn = require('./03-hanlder')

router.get('/user',fn.fn1)

router.get('/login',fn.fn2)


module.exports = router;