var express = require('express')
var path = require('path')
var createError = require('http-errors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var i18next = require('i18next')
var i18nextMiddleware = require('i18next-express-middleware')
var i18nextBackend = require('i18next-node-fs-backend')

var indexRouter = require('./routes/index')
var docsRouter = require('./routes/docs')

var app = express()

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

i18next.use(i18nextBackend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: __dirname + '/locales/{{lng}}.json',
      addPath: __dirname + '/locales/{{lng}}.missing.json'
    },
    whitelist: ['en', 'zh-CN'],
    fallbackLng: 'zh-CN',
    saveMissing: true,
    detection: {
      caches: ['cookie']
    }
  })
app.use(i18nextMiddleware.handle(i18next))

app.use('/', indexRouter)
app.use('/docs2', docsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})
// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app