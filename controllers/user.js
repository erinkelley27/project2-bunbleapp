const User = require('../models/User')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => {
        res.render('user/show', { user })
      })
  },
  createSignUp: (req, res) => {
    const signup = passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/signup',
      failureFlash: true
    })
    return signup(req, res)
  }
}
