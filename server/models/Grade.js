const mongoose = require('mongoose')

const GradeSchema = mongoose.Schema({
    course: {
        type: String,
        required: true,
    },
    ects: {
        type: Number,
        required: true,
    },
    grade: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Grade', GradeSchema)