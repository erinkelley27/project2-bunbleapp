const express = require('express')
const router = express.Router()

// What is this? AUTHENTICATION
// router.use((req, res, next) => {
//   res.locals.currentUser = req.user
//   next()
// })

// What are these requirements? ROUTES
router.use('/', require('./index.js'))
router.use('/user', require('./user.js'))
router.use('/burger', require('./burger.js'))

router.all('*', (req, res) => {
  res.status(400).send()
})

module.exports = router
