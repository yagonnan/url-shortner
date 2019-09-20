'use strict'

;(async () => {
  // load config
  require('dotenv').config()
  const debug = require('debug')('url-shortner:index')
  const error = require('debug')('url-shortner:index:error')
  const config = require('./lib/config')
  // start the service
  try {
    const models = require('./lib/models')()
    require('./lib/app')(models)
    debug(config.static.app.start)
  } catch (e) {
    error(e.message)
  }
})()
