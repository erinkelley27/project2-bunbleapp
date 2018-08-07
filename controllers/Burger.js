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
  // removeComment: (req, res) => {
  //   Burger.findOne({ _id: req.params.id })
  //     .then(burger => {
  //       burger.update({$pull: { comments: { _id: req.body.id }}})
  //       burger.save(err => {
  //         res.redirect(`/burger/${burger._id}`)
  //       })
  //     })
  // },
  // deleteComment: (burgerId, commentId) => {
  //   let comments = Burger.findOne({id: burgerId})
  // }
}
