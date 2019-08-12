var gulp = require('gulp')
var browserSync = require('browser-sync')
var reload = browserSync.reload
var nodemon = require('gulp-nodemon')

gulp.task('node', function () {
  nodemon({
    script: './bin/www',
    env: {
      'NODE_ENV': 'development'
    }
  })
})

gulp.task('server', ['node'], function () {
  var files = [
    'routes/**/*.js',
    'views/**/*.pug',
    'public/**/*.*'
  ]

  browserSync.init(files, {
    proxy: 'http://localhost:3000',
    browser: 'chrome',
    notify: false,
    port: 3001
  })

  gulp.watch(files).on('change', reload)
})