var $ = $ || window.jQuery
$(document).ready(function () {
  __menuEvent()
  $(window).on('resize', function () { __menuEvent() })

  $('.menu-trigger').on('click', function () {
    $(this).toggleClass('active')
    $('.header-area .nav').slideToggle(200)
  })

  if ($('.parallax').length > 0) {
    $('.parallax').parallax({
      imgSrc: $('.parallax').data('image-src'),
      zIndex: 1
    })
  }


  if (location.href.indexOf('/download') > -1) {
    setTimeout(function () { location.href = 'https://github.com/getrebuild/rebuild/releases' }, 2000)
  }
})

function __menuEvent() {
  var h = $(window).width()
  $('.submenu').on('click', function () {
    if (h < 992) {
      $('.submenu ul').removeClass('active')
      $(this).find('ul').toggleClass('active')
    }
  })
}

// 获取 URL 参数
// eslint-disable-next-line no-unused-vars
var $urlp = function (p) {
  var query = location.search.substring(1) || ''
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == p) { return pair[1] }
  }
  return false
}