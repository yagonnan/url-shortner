'use strict'

module.exports = {
  app: {
    start: 'app started successfully',
    health: {
      path: '/health'
    },
    body: {
      jsonLimit: '50mb'
    }
  },
  http: {
    status: {
      success: 200,
      badRequest: 400,
      unauthorized: 401
    }
  },
  response: {
    page: {
      connection: 100,
      query: 101,
      format: 102,
      serviceDown: 103,
      notFound: 104,
      preconditionFailed: 105,
      badRequest: 114
    }
  }
}
