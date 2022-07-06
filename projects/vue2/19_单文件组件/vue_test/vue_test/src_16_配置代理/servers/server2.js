const express = require('express')
const app = express()

app.use((req, resp, next) => {
    console.log('有人请求服务器2了')
    console.log('请求的资源是：', req.url)
    console.log('请求来自于：', req.get('Host'))
    next()
})

app.get('/cars', (req, res) => {
    res.send([
        {id: '001', name: '奔驰', price: 199},
        {id: '002', name: '马自达', price: 109},
        {id: '003', name: '捷达', price: 120},
    ])
})

app.listen(5001, () => {
    console.log('服务器2启动成功了，请求汽车信息地址为：http://localhost:5001/cars')
})