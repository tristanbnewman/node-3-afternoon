const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(express.json())

massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db',db)
    console.log("Database connected")
}).catch(error =>{
    console.log(error)
})

app.listen(3000,()=>{
    console.log("Listening on localhost:3000")
})