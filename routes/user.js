const express = require('express')
const router = express.Router()
const userController = require('../controllers/User.js')

router.get('/user/:id', userController.show)
router.get('/new', userController.new)

module.exports = router
