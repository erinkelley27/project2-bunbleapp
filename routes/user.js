const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')

router.get('/user/:id', userController.show)
router.get('/signup', userController.signUp)
router.post('/signup', userController.createSignUp)

// router.get('/login', userController.login)
// router.post('/login', userController.createLogin)
// router.get('/logout', userController.logout)

module.exports = router
