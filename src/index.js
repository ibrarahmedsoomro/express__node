const express = require('express')
const app = express();
const port = process.env.PORT || 3000
require('./Db/Conn')


app.get('/', (req,res)=>{
        res.send('Hello Server')
})


app.listen(port, ()=>{
    console.log(`Server is Running http://localhost:${port}`)
})