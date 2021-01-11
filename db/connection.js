const mongoose = require('mongoose')
require('dotenv').config()
console.log(process.env.USERNAME)
let MONGODB_URI = process.env.PROD_MONGODB || `mongodb+srv://user:${process.env.USERNAME}@geosmin.i4xox.mongodb.net/${process.env.PASSWORD}?retryWrites=true&w=majority`

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error('Connection error', e.message))

module.exports = mongoose.connection
