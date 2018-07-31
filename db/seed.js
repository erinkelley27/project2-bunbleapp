const User = require('../models/User')
const { Burger } = require('../models/Burger')
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
          image: '../images/default-burger.png',
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
        }),
        Burger.create({
          image: '../images/default-burger.png',
          name: 'Hawaiian Burger',
          description: 'desc placeholder',
          toppings: {
            bun: 'Kings Hawaiian Sweet Hamburger Bun',
            meat: 'Ground Beef Patty',
            topping1: 'Caramelized Pineapple Ring',
            topping2: 'Thick Cut Bacon',
            topping3: 'Pepper Jack Cheese',
            topping4: ' ',
            topping5: ' '
          }
        }).then(burger => {
          user.burgers.push(burger)
        }),
        Burger.create({
          image: '../images/default-burger.png',
          name: 'Philadelphia Phillies Burger',
          description: 'desc placeholder',
          toppings: {
            bun: 'Philly Soft Pretzel Bun',
            meat: 'Ground Beef Patty',
            topping1: 'Grilled Peppers and Onions',
            topping2: 'Cheese Whiz',
            topping3: ' ',
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
