var express = require('express')
var router = express.Router()

// TODO markdown
router.get('/', function (req, res, next) {
  res.send('Docs for develop')
})

module.exports = router