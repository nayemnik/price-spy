const config = require('config');
const mongoose = require('mongoose');
const logger = require('./logger');

const dbString = config.database.uri + config.database.name;

module.exports.connect = function () {
  mongoose.connection.on('connected', () => console.log('Mongodb connected'));
  mongoose.connection.on('error', logger.error.bind(logger, 'MongoDB connection error:'));
  mongoose.connect(dbString, config.database.options);
};
