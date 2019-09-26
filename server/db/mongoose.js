var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
mongoose.set('useCreateIndex', true)

module.exports = {mongoose}