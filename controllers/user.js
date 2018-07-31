const { User } = require('../models/User')
// const { Burger } = require('../models/Burger')

module.exports = {
  show: (req, res) => {
    User.fineOne({ _id: req.params.id })
      .then(user => {
        res.render('user/show', { user })
      })
  }
}
