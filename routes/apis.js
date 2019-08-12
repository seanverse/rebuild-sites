const pupp = require('puppeteer')
const express = require('express')
const router = express.Router()
const os = require('os')
const request = require('request')

const URL_REGEX = /^(http|https)\:\/\/[a-z0-9\-\.]+(:[0-9]*)?\/?([a-z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~!:])*$/i

// 检查授权
function checkAuth(req) {
  if (process.env.NODE_ENV === 'development') return true
  return (req.headers.referer || '').includes('getrebuild.com')
    || req.query.k === 'IjkMHgq94T7s7WkP'
}

// 发送文件
function sendFile(res, attname, file) {
  let options = {}
  if (attname) {
    options = {
      headers: {
        'Content-Type': 'application/octet-stream;charset=UTF-8',
        'Content-Disposition': 'attachment; filename=' + attname
      }
    }
  }
  res.sendFile(file, options)
}

// 统一认证
router.get('*', (req, res, next) => {
  if (!checkAuth(req)) {
    console.log('Bad auth from : ' + req.headers.referer)
    res.status(403).send({ error: 'Access forbidden' })
    return
  }
  next()
})

// -- APIs --

// 网页导出 PDF
router.get('/pupp/pdf', async function (req, res) {
  const url = req.query.url
  if (!url || !URL_REGEX.test(url)) {
    res.status(400).send({ error: 'Invalid parameter [url]' })
    return
  }

  const browser = await pupp.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
    slowMo: 0
  })
  const page = await browser.newPage()
  await page.goto(url)

  const dest = `${os.tmpdir()}/pupp-${new Date().getTime()}.pdf`
  await page.pdf({
    format: 'A4',
    printBackground: true,
    path: dest
  })
  await browser.close()

  sendFile(res, req.query.attname, dest)
})

// 网页截图
router.get('/pupp/screenshot', async function (req, res) {
  const url = req.query.url
  if (!url || !URL_REGEX.test(url)) {
    res.status(400).send({ error: 'Invalid parameter [url]' })
    return
  }

  const wh = (req.query.wh || '').split(',')
  let viewport = { deviceScaleFactor: 1, width: 1280, height: 720 }
  if (!isNaN(wh[0]) && ~~wh[0] > 0) viewport.width = ~~wh[0]
  if (!isNaN(wh[1]) && ~~wh[1] > 0) viewport.height = ~~wh[1]

  const browser = await pupp.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
    slowMo: 0
  })
  const page = await browser.newPage()
  if (viewport) await page.setViewport(viewport)

  await page.goto(url)
  let dest = `${os.tmpdir()}/pupp-${new Date().getTime()}.png`
  await page.screenshot({
    path: dest,
    fullPage: req.query.fp == 1
  })
  await browser.close()

  sendFile(res, req.query.attname, dest)
})

// BING 背景图
router.get('/misc/bgimg', async function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Content-Type', 'application/json; charset=utf-8')

  request('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN', { json: true }, (err, resp, body) => {
    if (!err && resp.statusCode == 200) {
      let result = body.images[0]
      result = { url: `https://cn.bing.com${result.url}`, copyright: result.copyright, source: 'cn.bing.com' }
      res.send(result)
    } else {
      res.status(500).send({ error: err || 'Unknow error' })
    }
  })
})

module.exports = router