const express = require('express')
const path = require('path')
const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
// const i18next = require('i18next')
// const i18nextMiddleware = require('i18next-express-middleware')
// const i18nextBackend = require('i18next-node-fs-backend')

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

// i18n
// i18next.use(i18nextBackend)
//   .use(i18nextMiddleware.LanguageDetector)
//   .init({
//     backend: {
//       loadPath: __dirname + '/locales/{{lng}}.json',
//       addPath: __dirname + '/locales/{{lng}}.missing.json'
//     },
//     whitelist: ['en', 'zh-CN'],
//     fallbackLng: 'zh-CN',
//     saveMissing: true,
//     detection: {
//       caches: ['cookie']
//     }
//   })
// app.use(i18nextMiddleware.handle(i18next))

app.use('/', indexRouter)
app.use('/docs', docsRouter)
app.use('/api', apisRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})
// error handler
app.use(function (err, req, res) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app