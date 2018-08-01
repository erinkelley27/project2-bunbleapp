const User = require('../models/User')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => {
        res.render('user/show', { user })
      })
  }
}
