'use strict'

const mysql = require('mysql2')
const config = require('../config')
let pool

module.exports = () => {
  // init db connection
  pool = mysql.createPool({
    connectionLimit: config.env.mysql.poolLimit,
    host: config.env.mysql.host,
    user: config.env.mysql.user,
    password: config.env.mysql.password,
    database: config.env.mysql.database
  })

  // create query function expression
  const query = function (query, data, cb) {
    return new Promise((resolve, reject) => {
      // get connection from pool
      pool.getConnection((err, connection) => {
        // handle connection error
        if (err) {
          return reject(config.error.sql.connection(err))
        }
        // use the connection
        connection.query(query, data, function (err, results) {
          // release connection
          connection.release()
          // handle query error after the release
          if (err) {
            return reject(config.error.sql.query(err))
          }
          // execute callback if provided
          if (cb) {
            resolve(cb(results))
          } else {
            resolve(results)
          }
        })
      })
    })
  }
  return {
    query,
    UrlShorten: require('./urlShorten')(query)
  }
}
