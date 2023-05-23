const express = require('express');
const Mock = require('mockjs')
const app = express()
const port = 3001

app.get('/',(req,res)=>{
    res.send('hello world!')
})

app.get('/list',(req,res)=>{
    const res_ = Mock.mock({
        'list|1-20':[{
            'id|+1':1,
            'city|1':'@city'
        }]
    })
    res.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
    })
   res.send(res_)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})