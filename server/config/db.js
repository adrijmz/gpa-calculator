//connect to database
const mongoose = require('mongoose')

//to use .env file
require('dotenv').config({ path: '.env' })

const connectDB = async () => {

    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB')
    } catch (error) {
        console.log("It wasn't possible to connect to DB")
        process.exit(1)
    }
}

module.exports = connectDB