const express = require('express')
const router = express.Router()
const burgerController = require('../controllers/burger.js')

router.get('/burger/:id', burgerController.show)
// router.get('/burger/:id/new', burgerController.new)
// router.post('/burger/:id', burgerController.create)

module.exports = router
