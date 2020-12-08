// 逻辑处理代码

const fn1 = (req,res)=>{
    console.log("给user发送了get请求");
    res.send("给user发送了get请求");
}
const fn2 = (req,res)=>{
    console.log("给user发送了get请求");
    res.send("给login发送了get请求");
}

module.exports = {
    fn1,
    fn2
}