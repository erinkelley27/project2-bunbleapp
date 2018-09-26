const { Burger } = require('../models/Burger')

module.exports = {
  show: (req, res) => {
    Burger.findOne({ _id: req.params.id })
      .then(burger => {
        res.render('burger/show', { burger })
      })
  },
  addComment: (req, res) => {
    let { content } = req.body
    Burger.findOne({ _id: req.params.id })
      .then(burger => {
        burger.comments.push({ content })
        burger.save(err => {
          res.redirect(`/burger/${burger._id}`)
        })
      })
  }
  // deleteComment: (req, res) => {
  //   Burger.findOneAndRemove({ _commentid: req.params.commentid })
  //     .then(burger => {
  //       res.redirect('/')
  //     })
  // }
}
