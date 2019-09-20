'use strict'

const router = require('koa-router')()
const urlController = require('./controllers/url')
const homeController = require('./controllers/home')

// frontend routes
router.get('/', homeController.index.bind(this))

// backend routes
router.get('/api/url/:code', urlController.checkUrlCode)
router.post('/api/url', urlController.generateUrl)

module.exports = router
