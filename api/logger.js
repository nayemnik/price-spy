const fs = require('fs')
const path = require('path')
const config = require('config')
const pino = require('pino')
const pinoms = require('pino-multi-stream')

const logPath = path.join(__dirname, './logs')
if (!fs.existsSync(logPath)) {
  fs.mkdirSync(logPath)
}
const logger = pino({
  level: config.app.log_level
}, pinoms.multistream([
  {
    stream: pinoms.prettyStream({
      prettyPrint: {
        translateTime: 'SYS:standard'
      },
      prettifier: require('pino-inspector')
    })
  },
  { level: 'warn', stream: fs.createWriteStream(`${logPath}/warn.log`, { flags: 'a' }) },
  { level: 'error', stream: fs.createWriteStream(`${logPath}/error.log`, { flags: 'a' }) },
  { level: 'fatal', stream: fs.createWriteStream(`${logPath}/fatal.log`, { flags: 'a' }) }
]))

module.exports = logger
