const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(express.urlencoded)

app.get('/fdata', (req, res) => {
    res.send("这是fdata数据")
})

app.get('/ax', (req, res) => {
    // console.log(req.query);
    res.send('axios的get请求' + '------' + req.query.id)
})

app.post('/axp', (req, res) => {
    // console.log(req.body);
    res.send('axios的post请求' + '------' + req.body.uname)
})

app.get('/qd', (req, res) => {
    res.send("123")
})

app.listen(3000, () => {
    console.log("running...");
})