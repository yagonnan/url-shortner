'use strict'

const debug = require('debug')('url-shortner:url')
const config = require('../config')

module.exports = {
  index
}

async function index (ctx) {
  debug(index.name)
  return ctx.render('home', {host: `${config.env.host}`})
}
