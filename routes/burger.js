const express = require('express')
const router = express.Router()
const burgerController = require('../controllers/Burger.js')

router.get('/burger/:id', burgerController.show)
router.put('/burger/:id', burgerController.addComment)
// router.put('/burger/:id', burgerController.removeComment)

module.exports = router
