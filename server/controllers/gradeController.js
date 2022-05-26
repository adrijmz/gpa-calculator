const bodyParser = require('body-parser')
const Grade = require('../models/Grade')


exports.createGrade =  async (req, res) => {
    try {
        let grade = new Grade(req.body)

        grade.save()
        res.send(grade)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('There was an internal server error')
    }
}

exports.getGrade = async (req, res) => {
    //return all grade in db
    try {        
        const GRADES = await Grade.find()
        res.json(GRADES)
    } catch (error) {
        console.log(error)
        res.status(500).send('There was an error')
    }
}

exports.updateGrade = async (req,res) => {
    try {
        const {course, ects, grade} = req.body
        let updatedGrade = await Grade.findById(req.params.id)
    
        if(!updatedGrade){
            res.status(404)
            res.json('No coincidence with that id')
        }
    
        updatedGrade.course = course
        updatedGrade.ects = ects
        updatedGrade.grade = grade
    
        updatedGrade = await Grade.findOneAndUpdate({_id:req.params.id}, updatedGrade, {new:true})
        res.json(updatedGrade)
    } catch (error) {
        console.log(error)
        res.status(500).send('There was an error')
    }

}