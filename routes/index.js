var express = require('express')
var router = express.Router()

const pages = {
  'index': ['高度可定制化的企业管理系统'],
  'download': ['产品下载'],
  'about': ['关于我们'],
  'authority': ['授权查询'],
  'building-systems': ['在线定制'],
  'report-issue': ['提交问题'],
}

router.get('/*', function (req, res) {
  let path = req.path.substr(1) || 'index'

  if (path == 'robots.txt') {
    res.header('Content-Type', 'text/plain;charset=UTF-8')
    res.send('User-agent: *\nAllow: /')
    return
  }

  if (path == 'contact') path = 'about'
  res.render(path, {
    pretty: process.env.NODE_ENV === 'development',
    title: pages[path] + ' · REBUILD'
  })
})

module.exports = router
