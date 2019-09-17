const express = require('express')
const router = express.Router()
const fs = require('fs')
const md = require('markdown-it')()
const createError = require('http-errors')

const Cache = require('cache')
const docsCache = new Cache(1000 * 60 * 120)  // 2h

let NAV_HTML
(() => {
  fs.readFile(`${__dirname}/../docs/SUMMARY.md`, 'utf-8', (err, content) => {
    content = content.replace(/\(/g, '(/docs/')
      .replace(/index.md/g, '')
      .replace(/.md/g, '')
    NAV_HTML = md.render(content)
  })
})()

router.get('/images/*', function (req, res) {
  let path = req.path
  path = `${__dirname}/../docs${path}`
  fs.readFile(path, function (err, data) {
    if (err) {
      errorHandler(req, res)
    } else {
      res.setHeader('Cache-Control', 'public, max-age=7776000')
      res.end(data)
    }
  })
})

router.get('/*', function (req, res) {
  let path = req.path
  if (path.endsWith('/')) path += 'index'
  if (!path.endsWith('.md')) path += '.md'
  path = `${__dirname}/../docs/${path}`

  let options = {
    pretty: process.env.NODE_ENV === 'development',
    nav_content: NAV_HTML,
    html: true
  }

  let c = docsCache.get(path)
  if (process.env.NODE_ENV === 'development') c = null
  if (c) {
    options.doc_content = c
    res.render('docs', options)
    return
  }

  fs.readFile(path, 'utf-8', (err, content) => {
    if (err) {
      errorHandler(req, res)
      return
    }

    let result = md.render(content)
    options.doc_content = result
    docsCache.put(path, result)
    res.render('docs', options)
  })
})

// error handler
const errorHandler = function (req, res) {
  let err = createError(404)
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
}

module.exports = router