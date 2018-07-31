const { Burger } = require('../models/Burger')

// module.exports = {
//   show: (req, res) => {
//     Burger.findOne({ _id: req.params.id })
//       .exec(function (err, burger) {
//         Comment.populate(burger.comments, { path: 'author' }, function (
//           err,
//           comments
//         ) {
//           burger.comments = comments
//           console.log(burger)
//           res.render('burger/show', burger)
//         })
//       })
//   }
// }

// Why isn't this working?
module.exports = {
  show: (req, res) => {
    Burger.findOne({ _id: req.params.id })
      .then(burger => {
        res.render('burger/show', { burger })
      })
  }
}
