const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bunble')

mongoose.Promise = Promise

module.exports = mongoose
