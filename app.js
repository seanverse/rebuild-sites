const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const docsRouter = require('./routes/docs')
const apisRouter = require('./routes/apis')
const { errorHandler } = require('./routes/_common')

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

app.use(errorHandler)

module.exports = app