const express = require('express')
const router = express.Router()
const burgerController = require('../controllers/burger.js')

router.get('/', burgerController.show)

module.exports = router
