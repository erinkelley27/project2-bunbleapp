const User = require('../models/User')
// const { Burger } = require('../models/Burger')
// const passport = require('passport')

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => {
        res.render('user/show', { user })
      })
  }
}
