const bodyParser = require('body-parser')
const Grade = require('../models/Grade')
const User = require('../models/User')


exports.createGrade =  async (req, res) => {
    
    try {
        User.findOne({email:req.params.email}, (err, user) => {
            if(user){
                let grade = new Grade(req.body)
                user.grades.push(grade)
                console.log(user)
                res.send(user.grades)
                user.save()
            }
            else{
                res.json("This user doesn't exists")
                console.log(error)
            }
        })        

    } catch (error) {
        res.status(500).send('There was an internal server error')
    }
}

exports.getGrade = async (req, res) => {    //return all grade in db
    try {        
        const GRADES = await Grade.find()
        res.json(GRADES)
    } catch (error) {
        console.log(error)
        res.status(500).send('There was an error')
    }
}

exports.deleteGrade = async (req,res) => {
    try {
        User.findOne({email: req.params.email}, (err, user) => {
            if(user){
                user.grades.pop()
                res.json('course deleted')
                user.save()
            }
            else{
                res.status(404).send('User not founded')
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('There was an error')
    }

}