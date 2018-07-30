const User = require('../models/User')
const { Burger } = require('..models/Burger')
const bcrypt = require('bcrypt-nodejs')

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Burger.find({}).remove(() => {
    let erin = User.create({
      local: {
        email: 'erinkelley27@gmail.com',
        password: createPassword('password1')
      }
    })
  })
})
