const express = require('express')
const path = require('path')
const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const docsRouter = require('./routes/docs')
const apisRouter = require('./routes/apis')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/docs', docsRouter)
app.use('/api', apisRouter)
app.use('/', indexRouter)

// error handler
const errorHandler = function (req, res) {
  let err = createError(404)
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
}
app.use(errorHandler)

module.exports = app