const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
{collection: 'comment'})

const Burger = new Schema({
  image: String,
  name: String,
  description: String,
  toppings: {
    bun: String,
    meat: String,
    topping1: String,
    topping2: String,
    topping3: String,
    topping4: String,
    topping5: String
  },
  comments: [Comment]
})

module.exports = {
  Comment: mongoose.model('Comment', Comment),
  Burger: mongoose.model('Burger', Burger)
}
