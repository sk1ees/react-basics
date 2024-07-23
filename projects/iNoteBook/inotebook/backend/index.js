const connectToMongo = require('./db')
const express = require('express')
connectToMongo(); 

const app = express()
const port = 6969

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.listen(port , ()=>{
    console.log(`Express done! listening at: ${port}`)
})