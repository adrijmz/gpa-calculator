const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')

app.use(bodyParser.json({extended:false}))

//connect to db
connectDB()

app.use('/api/grades', require('./routes/grade'))









app.listen(process.env.PORT || 3000, () => {
    console.log('server listening')
})