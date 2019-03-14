var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    title: req.t('home.title'),
    keywords: req.t('home.keywords'),
    description: req.t('home.description')
  })
})

router.get('/download', function (req, res) {
  res.render('download', {
    title: '下载 REBUILD',
    pretty: true
  })
})

router.get('/about', function (req, res) {
  res.render('about', {
    title: '关于我们',
    pretty: true
  })
})

module.exports = router