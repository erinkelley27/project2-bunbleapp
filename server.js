const express = require('express')
const hbs = require('hbs')

// Does it matter what order these are in?
const app = express()
hbs.registerPartials(_dirname + 'view/partials')
app.use(express.static('public'))
app.set('view engine', 'hbs')

app.use(require('./routes/app.js'))

app.listen(3000, () => console.log('running on port 3000'))
