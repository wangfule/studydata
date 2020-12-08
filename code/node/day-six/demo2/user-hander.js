const db = require('./db')

const getinfo = (req,res)=>{
    const id = req.params.id;
    const sqlStr = "select * from users where id=?"

    db.query(sqlStr,id,(err,result)=>{
        if(err) return res.send(err.message)
        res.send(result)
    })
}

const addinfo = (req,res)=>{
    const sqlStr = "insert into users set ?"
    db.query(sqlStr,req.body,(err,result)=>{
        if(err) return res.send(err.message)
        if(result.affectedRows != 1) return res.send("添加失败")
        res.send("添加成功")
    })
}

const updataInfo = (req,res)=>{
    const sqlStr = "update users set ? where id=?"
    db.query(sqlStr,[req.body,req.params.id],(err,result)=>{
        if(err) return res.send(err.message)
        if(result.affectedRows != 1) return res.send("修改失败")
        res.send("修改成功")
    })
}


module.exports={
    getinfo,
    addinfo,
    updataInfo
}