const { Burger, Comment } = require('../models/Burger')

module.exports = {
  show: (req, res) => {
    Burger.findOne({ _id: req.params.id })
      .exec(function (err, burger) {
        Comment.populate(burger.comments, { path: 'author' },
          function (err, comments) {
            burger.comments = comments
            res.render('burger/show', { burger })
          })
      })
  },
  update: (req, res) => {
    let { content, author } = req.body
    Burger.findOne({ _id: req.params.id })
      .then(burger => {
        burger.comments.push({ content, author })
        burger.save(err => {
          res.redirect(`/burger/${burger._id}`)
        })
      })
  }
}
