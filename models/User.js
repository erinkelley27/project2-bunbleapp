const mongoose = require('../db/connection')
const Schema = mongoose.Schema

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

module.exports = mongoose.model('User', User)
