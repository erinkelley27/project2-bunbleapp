const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  local: {
    email: String,
    password: String,
    image: String
  },
  burgers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Burger'
    }
  ]
})

module.exports = mongoose.model('User', User)
