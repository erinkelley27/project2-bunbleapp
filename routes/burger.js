const express = require('express')
const router = express.Router()
const burgerController = require('../controllers/burger.js')

router.get('/burger/:id', burgerController.show)
router.put('/burger/:id', burgerController.update)
router.delete('burger/:id', burgerController.delete)

module.exports = router
