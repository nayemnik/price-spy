const { queryParser } = require('express-query-parser')
const config = require('config')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const csurf = require('csurf')
const express = require('express')
const mongoose = require('mongoose')

const logger = require('./logger')

const app = express()

app.use(cors({
  credentials: true,
  origin: /https?:\/\/localhost:\d{2,5}$/,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  queryParser({
    parseNull: true,
    parseBoolean: true
  })
)
app.use(cookieParser())
app.use(csurf({
  cookie: true,
}))
app.get('/csrf', function (req, res) {
  return res.json({ csrfToken: req.csrfToken() })
})
app.post('/test', function (req, res) {
  res.send('ok')
})

// Routes
require('./routes')(app)

const mongoDB = config.database.uri + config.database.name

// Set up mongoose connection
mongoose.set('useFindAndModify', false)
mongoose.connect(mongoDB, config.database.options)
mongoose.connection.on('error', logger.error.bind(logger, 'MongoDB connection error:'))

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || config.app.port
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
