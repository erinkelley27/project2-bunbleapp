const { Burger, Comment } = require('../models/Burger')

module.exports = {
  show: (req, res) => {
    Burger.findOne({ _id: req.params.id })
      .then(burger => {
        res.render('burger/show', { burger })
      })
  },
  update: (req, res) => {
    let { content } = req.body
    Burger.findOne({ _id: req.params.id })
      .then(burger => {
        burger.comments.push({ content })
        burger.save(err => {
          res.redirect(`/burger/${burger._id}`)
        })
      })
  },
  delete: (req, res) => {
    let { comments } = req.body.id
    Burger.findOne({ _id: req.params.id })
      .then(burger => {

        res.redirect(`/burger/${burger._id}`)
      })
  }
}



