var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    pretty: process.env.NODE_ENV === 'development'
  })
})

router.get('/download', function (req, res) {
  res.render('download', {
    pretty: process.env.NODE_ENV === 'development',
    title: '下载 REBUILD'
  })
})

router.get('/about', function (req, res) {
  res.render('about', {
    pretty: process.env.NODE_ENV === 'development',
    title: '关于我们'
  })
})

module.exports = router