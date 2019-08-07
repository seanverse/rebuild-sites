const express = require('express')
const router = express.Router()
const fs = require('fs')
const md = require('markdown-it')()

let NAV_HTML
function __init__() {
  fs.readFile(`${__dirname}/../docs/SUMMARY.md`, 'utf-8', (err, content) => {
    NAV_HTML = md.render(content)
    NAV_HTML = NAV_HTML.replace(/index.md/g, '')
    NAV_HTML = NAV_HTML.replace(/.md/g, '')
  })
}
__init__()

router.get('/*', function (req, res) {
  let path = req.path
  if (path.endsWith('/')) path += 'index.md'
  else path += '.md'
  path = `${__dirname}/../docs/${path}`

  fs.readFile(path, 'utf-8', (err, content) => {
    if (err) {
      res.sendStatus(404)
      return
    }

    let result = md.render(content)
    res.render('docs', {
      pretty: process.env.NODE_ENV === 'development',
      nav_content: NAV_HTML,
      doc_content: result,
      html: true
    })
  })
})

module.exports = router