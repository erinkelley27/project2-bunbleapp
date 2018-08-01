const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')

// Does it matter what order these are in?
const app = express()
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('public'))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(require('./routes/index.js'))
app.use(require('./routes/app.js'))
app.use(require('./routes/burger.js'))
app.use(require('./routes/user.js'))

app.listen(3000, () => console.log('running on port 3000'))

app.use(require('better-express-errors')(app))
