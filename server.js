const express = require('express')
const hbs = require('hbs')
const morgan = require('morgan')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')

// Does it matter what order these are in?
const app = express()

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser())

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('public'))

app.use(session({secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS'}))
app.use(flash())

app.use(require('./routes/app.js'))
app.use(require('./routes/burger.js'))
app.use(require('./routes/user.js'))

app.listen(3000, () => console.log('running on port 3000'))
