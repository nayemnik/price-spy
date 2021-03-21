const { queryParser } = require('express-query-parser')
const config = require('config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const logger = require('./logger')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  queryParser({
    parseNull: true,
    parseBoolean: true
  })
)
// app.use(cookieParser())
// app.use(csurf({
//   cookie: {
//     key: 'XSRF-TOKEN',
//   }
// }))

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
