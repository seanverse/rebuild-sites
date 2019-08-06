const pupp = require('puppeteer')
const express = require('express')
const router = express.Router()

// 网页导出 PDF
router.get('/pupp/pdf', async function (req, res) {
  const url = req.query.url
  if (!url) {
    res.send('无效参数 : ' + url)
    return
  }

  const browser = await pupp.launch({
    headless: true,
    slowMo: 0
  })
  const page = await browser.newPage()
  await page.goto(url)
  let dest = `/tmp/${new Date().getTime()}.pdf`
  await page.pdf({
    format: 'A4',
    path: dest
  })
  console.log('Export dest : ' + dest)
  await browser.close()

  res.sendFile(dest)
})

// 网页截图
router.get('/pupp/screenshot', async function (req, res) {
  const url = req.query.url
  if (!url) {
    res.send('无效参数 : ' + url)
    return
  }

  const params = req.query.params || '0,0,0,0,0,0'  // width,height,x0,x1,y0,y1
  
  const browser = await pupp.launch({
    headless: true,
    slowMo: 0
  })
  const page = await browser.newPage()
  await page.goto(url)
  let dest = `/tmp/${new Date().getTime()}.png`
  await page.screenshot({
    path: dest
  })
  console.log('Export dest : ' + dest)
  await browser.close()
  
  res.sendFile(dest)
})

module.exports = router