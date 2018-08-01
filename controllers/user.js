const User = require('../models/User')

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => {
        res.render('user/show', { user })
      })
  }
}
