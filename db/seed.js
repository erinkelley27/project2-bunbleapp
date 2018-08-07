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
          image: '../images/breakfast-burger.jpg',
          name: 'Breakfast Burger',
          description: 'Breakfast of Champions',
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
          description: 'The Burger of Aloha',
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
          name: 'Philadelphia Burger',
          description: 'Trust the Process',
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
        }),
        Burger.create({
          image: '../images/default-burger.png',
          name: 'Cowboy Burger',
          description: 'Howdy, Partner',
          toppings: {
            bun: 'Brioche Bun',
            meat: 'Ground Bison Patty',
            topping1: 'Beer Battered Onion Ring',
            topping2: 'Thick Cut Bacon',
            topping3: 'BBQ Sauce',
            topping4: 'Cheddar Cheese',
            topping5: ' '
          }
        }).then(burger => {
          user.burgers.push(burger)
        }),
        Burger.create({
          image: '../images/default-burger.png',
          name: 'Thanksgiving Burger',
          description: 'Gobble, Gobble',
          toppings: {
            bun: 'Brioche Bun',
            meat: 'Ground Turkey Patty',
            topping1: 'Gravy',
            topping2: 'Stuffing',
            topping3: 'Cranberry Sauce',
            topping4: ' ',
            topping5: ' '
          }
        }).then(burger => {
          user.burgers.push(burger)
        }),
        Burger.create({
          image: '../images/default-burger.png',
          name: 'Big Apple Burger',
          description: 'A Burger State of Mind',
          toppings: {
            bun: 'Everything Bagel',
            meat: 'Ground Beef Patty',
            topping1: 'Thick Cut Bacon',
            topping2: 'Cheddar Cheese',
            topping3: 'Thinly Sliced Apple',
            topping4: ' ',
            topping5: ' '
          }
        }).then(burger => {
          user.burgers.push(burger)
        }),
        Burger.create({
          image: '../images/default-burger.png',
          name: 'All American Classic',
          description: 'God Bless the B-U-N',
          toppings: {
            bun: 'Brioche Bun',
            meat: 'Ground Beef Patty',
            topping1: 'Lettuce',
            topping2: 'Tomato',
            topping3: 'Raw Onion',
            topping4: 'American Cheese',
            topping5: ' '
          }
        }).then(burger => {
          user.burgers.push(burger)
        }),
        Burger.create({
          image: '../images/default-burger.png',
          name: 'Caribbean Burger',
          description: 'Irie, Mon!',
          toppings: {
            bun: 'Brioche Bun',
            meat: 'Ground Beef Patty with Jerk Seasoning',
            topping1: 'Raw Onion',
            topping2: 'Mango Chutney',
            topping3: ' ',
            topping4: ' ',
            topping5: ' '
          }
        }).then(burger => {
          user.burgers.push(burger)
        }),
        Burger.create({
          image: '../images/default-burger.png',
          name: 'Sunday Brunch Burger',
          description: 'Try It Bottomless',
          toppings: {
            bun: 'English Muffin',
            meat: 'Ground Beef Patty',
            topping1: 'Canadian Bacon',
            topping2: 'Poached Egg',
            topping3: 'Hollandaise',
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
