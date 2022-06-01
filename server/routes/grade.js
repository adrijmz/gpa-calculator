const express = require('express')
const router = express.Router()
const gradeController = require('../controllers/gradeController')

router.post('/:email', gradeController.createGrade)
router.get('/:email', gradeController.getGrade)
router.delete('/:email', gradeController.deleteGrade)

module.exports = router