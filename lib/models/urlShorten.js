'use strict'

const debug = require('debug')('url-shortener:urlShorten')
let query

module.exports = q => {
  query = q
  return UrlShorten
}

class UrlShorten {
  static getCode (code) {
    debug(this.getCode.name)
    return query(
      `
      SELECT
        *
      FROM
        url_shorten
      WHERE
        url_code = ?
      `,
      code,
      results => {
        return results.pop()
      }
    )
  }

  static createUrl (data) {
    const { original_url, url_code, short_url } = data

    return query(
      `
      INSERT INTO
        url_shorten 
      SET
        created_at = NOW(),
        updated_at = NOW(),
        ?
      `,
      {
        original_url,
        url_code,
        short_url
      },
      results => {
        return results.insertId
      }
    )
  }
}
