var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'REBUILD - 免费开源高度可定制化的企业管理系统',
    pretty: false
  })
})

module.exports = router