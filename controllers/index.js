const { Burger } = require('../models/Burger')

module.exports = {
  index: (req, res) => {
    Burger.find({})
      .limit(4)
      .then(burgers => {
        res.render('app/index', { burgers })
      })
  }
}
