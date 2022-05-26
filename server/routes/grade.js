const express = require('express')
const router = express.Router()
const gradeController = require('../controllers/gradeController')

router.post('/', gradeController.createGrade)
router.get('/', gradeController.getGrade)
router.put('/:id', gradeController.updateGrade)

module.exports = router