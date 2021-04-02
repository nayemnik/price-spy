const { queryParser } = require('express-query-parser');
const config = require('config');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(
  cors({
    credentials: true,
    origin: /https?:\/\/localhost:\d{2,5}$/,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  queryParser({
    parseNull: true,
    parseBoolean: true,
  })
);

// Routes
require('./routes')(app);
require('./db').connect();

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || config.app.port;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}
