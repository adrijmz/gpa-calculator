const User = require("../models/User")
const bodyParser = require('body-parser')




exports.createNewUser = async (req,res) => {
    //function to insert a new user into db
    try{
        let newUser = new User(req.body)

        User.findOne({email:newUser.email}, (err, user) => {
            if(user){
                //user already exists
                res.json('User already exists')
            }
            else{
                newUser.save()
                res.send(newUser)
            }
        })
        
    }catch (error) {
        console.log(error)
        res.status(500).send('There was an internal server error')
    }
}

exports.getUser = async (req,res) => {
    try {
        
        const {email, password} = req.body

        let userToFind  = await User.findOne({email: email})

        if(!userToFind) res.status(404).send('User not found') 
        else {
            if(userToFind.password === password) res.json('User found!')        
            else res.json('password incorrect') 
        }
            
    } catch (error) {
        console.log(error)
        res.status(500).send('There was an internal server error')
    }
}