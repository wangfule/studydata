const express = require("express");
const app = express();
const cors = require("cors")
const bodyparser = require("body-parser")

app.use(cors())
app.use(bodyparser.json())
app.use(express.urlencoded({
    extended: false
}))
app.get("/form", (req, res) => {
    res.send(req.query)
})
let books = [{
    id: 1,
    name: '三国演义',
    date: new Date()
}, {
    id: 2,
    name: '水浒传',
    date: new Date()
}, {
    id: 3,
    name: '红楼梦',
    date: new Date()
}, {
    id: 4,
    name: '西游记',
    date: new Date()
}];
app.get("/getBoosInfo", (req, res) => {
    res.send({
        status: 0,
        message: "获取图书信息成功!",
        data: books
    })
})

// 添加数据
app.post("/addBook", (req, res) => {

    if (!req.body.id || !req.body.name) return res.send({
        status: 1,
        message: "id和名字不能为空"
    })
    let flag = books.some(function (book) {
        return book.id == req.body.id
    })
    if (flag) return res.send({
        status: 1,
        message: "id重复了",
    })

    books.push(req.body)
    res.send({
        status: 0,
        message: "添加成功",
        data: books
    })

})
// 修改数据

app.put("/editBook", (req, res) => {
    // console.log(req.body);
    books.some(function (item) {
        if (item.id == req.body.id) {
            item.id = req.body.id
            item.name = req.body.name;;
            item.date = req.body.date;
        }

    })

    res.send({
        status: 0,
        message: "修改成功",
        data: books
    })

})

// 删除数据

app.delete('/delbook/:id', (req, res) => {
    console.log(req.params);
    let i = books.findIndex(function (item) {
        return item.id == req.params.id
    })
    books.splice(i, 1)
    res.send({
        status: 0,
        message: "删除成功",
        data: books
    })
})

app.listen(80, () => {

})