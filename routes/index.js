var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'REBUILD - 免费开源高度可定制化的企业管理系统',
    pretty: false
  })
})

router.get('/download', function (req, res, next) {
  res.render('download', {
    title: '下载 REBUILD',
    pretty: false
  })
})

router.get('/about', function (req, res, next) {
  res.render('about', {
    title: '关于我们',
    pretty: false
  })
})

module.exports = router