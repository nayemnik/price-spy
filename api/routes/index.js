module.exports = (app) => {
  app.use('/search', require('./search'));
  app.use('/category', require('./category'));
  app.use('/product', require('./product'));
};
