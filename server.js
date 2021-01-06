const routes = require('./routes')
const logger = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const db = require('./db/connection')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/api', routes)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
