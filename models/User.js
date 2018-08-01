const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const User = new Schema({
  local: {
    email: String,
    password: String
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Burger'
    }
  ]
})

// What is a salt?
User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, brcypt.genSaltSync(8), null)
}

module.exports = mongoose.model('User', User)
