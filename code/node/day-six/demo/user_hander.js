
const db = require("./db")

let getinfo = (req,res)=>{
    const id = req.params.id;
    const sqlStr = "select * from users where id = ?"
    db.query(sqlStr,id,(err,result)=>{
        if(err) return res.send("查询失败!")
        res.send(result)
    })
}

let addinfo = (req,res)=>{
    const sqlStr = "insert into users set ?"
    
    db.query(sqlStr,req.body,(err,result)=>{
        if(err) return res.send(err.message)
        if(result.affectedRows != 1)  res.send("添加失败!")
        res.send("添加成功!")
    })
}

let updatainfo = (req,res)=>{
    const id = req.params.id;
    const sqlStr = "update users set ? where id=?"
    db.query(sqlStr,[req.body,id],(err,result)=>{
        if(err) return res.send(err.message)
        if(result.affectedRows != 1)  res.send("修改失败!")
        res.send("修改成功!")
    })

}

module.exports = {
   getinfo,
   addinfo,
   updatainfo
}