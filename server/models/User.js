const mongoose = require('mongoose')

const userChema = mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    surname:{
        type:String,
        required: false
    },
    collegue:{
        type:String,
        required: false
    },
    password:{
        type:String,
        required: true
    },
})

module.exports = mongoose.model('User', userChema)