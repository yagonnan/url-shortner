'use strict'

module.exports = {
  nodeEnv: process.env.NODE_ENV || 'production',
  port: +process.env.PORT || 3000,
  mysql: {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PWD,
    database: process.env.SQL_DATABASE,
    poolLimit: +process.env.POOL_LIMIT || 10
  }
}
