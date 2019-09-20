const shortApp = (() => {
  return {
    init: () => {
      const btnSubmit = $('#btn-submit')
      const btnReset = $('#btn-reset')
      const resultTitle = $('#result-title')
      const originalUrlClass = $('#original-url')
      const shortUrlClass = $('#short-url')
      const resultText = $('#result-text')
      const resultUrl = $('#result-url')
      $(resultTitle).hide()

      btnReset.click(() =>{
        $(resultTitle).html('')
        $(originalUrlClass).val('')
        $(shortUrlClass).val('')
        $(resultText).html('')
        $(resultUrl).html('')
      })

      btnSubmit.click(() => {
        const originalUrl = $(originalUrlClass).val()
        const shortBaseUrl = $(shortUrlClass).val()
        // prepare payload
        const payload = {
          originalUrl,
          shortBaseUrl
        }

        if (originalUrl && shortBaseUrl) {
          // call api to translate short code url
          $.post('/api/url', payload)
            .done(data => {
              $(resultTitle).show()
              $(resultUrl).attr('href', `/api/url/${data.urlCode}`)
              $(resultUrl).html(data.shortUrl)
            })
            .fail(error => {
              $(resultText).html('Oops! service is not available for a while. try again.')
            })
        } else {
          $(resultText).html('The above fields are required.')
          $(resultTitle).hide()
        }
      })
    }
  }
})()

$(document).ready(shortApp.init)
