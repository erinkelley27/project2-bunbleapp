const express = require('express')
const router = express.Router()
const burgerController = require('../controllers/burger.js')

router.get('/burger/:id', burgerController.show)

module.exports = router
