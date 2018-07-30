const express = require('express')
const hbs = require('hbs')

const app = express()
app.set('view engine', 'hbs')

app.use(require('./routes/index.js'))

app.listen(3000, () => console.log('running on port 3000'))
