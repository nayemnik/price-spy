module.exports = {
  app: {
    name: 'PriceSpy',
    port: 3001,
    log_level: 'info'
  },
  database: {
    uri: 'mongodb://localhost:27017/',
    name: 'scraperjs',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
}
