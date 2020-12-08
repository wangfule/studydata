const express = require("express");
const router = express.Router();
const hander = require('./user-hander')

router.get('/getinfo/:id',hander.getinfo)
router.post('/addinfo',hander.addinfo)

router.post('/updatainfo/:id',hander.updataInfo)

module.exports = router