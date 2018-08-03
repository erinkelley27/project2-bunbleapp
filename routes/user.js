const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')

router.get('/user/:id', userController.show)
router.get('/new', userController.new)
router.post('/user', userController.create)
router.delete('/user/:id', userController.delete)

module.exports = router
