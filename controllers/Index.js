const { Burger } = require('../models/Burger')

module.exports = {
  index: (req, res) => {
    Burger.find({})
      .then(burgers => {
        res.render('app/index', { burgers })
      })
  }
}

