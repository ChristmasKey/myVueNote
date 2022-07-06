const express = require('express')
const app = express()

app.use((req, resp, next) => {
    console.log('有人请求服务器1了')
    console.log('请求的资源是：', req.url)
    console.log('请求来自于：', req.get('Host'))
    next()
})

app.get('/students', (req, resp) => {
    resp.send([
        {id: '001', name: 'tom', age: 18},
        {id: '002', name: 'jerry', age: 19},
        {id: '003', name: 'tony', age: 20},
    ])
})

app.listen(5000, () => {
    console.log('服务器1启动成功了，请求学生信息地址为：http://localhost:5000/students')
})