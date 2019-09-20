'use strict'

module.exports = {
  sql: {
    connection: err => new Error(`SQL connection failed with error "${err}"`),
    query: err => new Error(`SQL query failed with error "${err}"`)
  },
  invalidRequest: details => ({
    reason: 'Invalid request data format',
    details
  }),
  notFound: new HandleError('There is no match code in the database')
}

function HandleError (userMessage, error) {
  this.name = 'url-shortner:error'
  this.message = userMessage
  this.error = error ? error.error || error : userMessage || 'Unknown error'
  this.stack = (new Error()).stack
}
