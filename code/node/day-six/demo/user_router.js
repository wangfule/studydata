const express = require("express");
const router = express.Router();

const hander = require("./user_hander")

router.get("/get/:id",hander.getinfo),

router.post("/add",hander.addinfo)

router.post("/updata/:id",hander.updatainfo)

module.exports = router;