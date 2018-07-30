const User = require('../models/User')
const { Burger } = require('..models/Burger')
const bcrypt = require('bcrypt-nodejs')

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Burger.find({}).remove(() => {
    let admin = User.create({
      local: {
        email: 'erinkelley27@gmail.com',
        password: createPassword('password1')
      }
    }).then(user => {
      Promise.all([
        Burger.create({
          image: './public/images/default-burger',
          name: 'Breakfast Burger',
          description: 'When breakfast is on a burger, you can eat burgers any time!',
          toppings: {
            bun: 'Brioche Bun',
            meat: 'Ground Beef Patty',
            topping1: 'Maple & Black Pepper Candied Bacon',
            topping2: 'Runny Egg',
            topping3: 'Sharp Cheddar Cheese',
            topping4: ' ',
            topping5: ' '
          }
        }).then(burger => {
          user.burgers.push(burger)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })
  })
})
