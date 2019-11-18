const createError = require('http-errors')

// error handler
// eslint-disable-next-line no-unused-vars
const errorHandler = function (err, req, res, next) {
  let status = 500
  if (err.message.includes('Failed to lookup view')
    || err.message.includes('Cannot find')
    || err.message.includes('no such file')) status = 404

  res.locals.message = createError(status).message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(status).render('error')
}

module.exports = { errorHandler }