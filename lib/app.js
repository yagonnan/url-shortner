'use strict'

const debug = require('debug')('url-shortner:app')
const error = require('debug')('url-shortner:app:error')
const config = require('./config')
const Koa = require('koa')
const router = require('./router')
const health = require('koa-heartbeat')(config.static.app.health)
const bodyparser = require('koa-bodyparser')
const path = require('path')
const serve = require('koa-static')
const body = require('koa-body')
const Pug = require('koa-pug')

module.exports = models => {
  const app = new Koa()
  // enable validation
  require('koa-validate')(app)
  app.use(body())
  // declare template engine
  const pug = new Pug({
    viewPath: path.join(__dirname, `views`),
    debug: false,
    pretty: false,
    compileDebug: false
  })
  pug.use(app)
  // serve static files
  app.use(serve(path.join(__dirname, 'public')))
  // register models
  app.context.models = models
  // health check
  app.use(health)
  // router
  app.use(bodyparser(config.static.app.body))
  app.use(router.routes())
  app.use(router.allowedMethods())

  // handle 404
  app.use(async (ctx, next) => {
    if (ctx.status === 404) {
      ctx.status = 404
      return ctx.render('not-found-default')
    }
    await next()
  })
  // return app instance
  return app
    .listen(config.env.port)
    .on('error', err => _handleErr(err))
}

function _handleErr (err) {
  debug(_handleErr.name)
  error(err.message)
}
