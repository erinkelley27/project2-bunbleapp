const User = require('../models/User')

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => {
        res.render('user/show', { user })
      })
  },
  new: (req, res) => {
    res.render('user/new')
  },
  create: (req, res) => {
    User.create({
      local: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(user => {
      res.redirect(`/user/${user.id}`)
    })
  },
  delete: (req, res) => {
    User.findOneAndRemove({ _id: req.params.id })
      .then(user => {
        res.redirect('/')
      })
  }
}

