(function ($) {
  menu_event()

  if ($('.menu-trigger').length) {
    $('.menu-trigger').on('click', function () {
      $(this).toggleClass('active')
      $('.header-area .nav').slideToggle(200)
    })
  }

  $(window).on('load', function () {
    $('.parallax').parallax({
      imgSrc: $('.parallax').data('image-src'),
      zIndex: 1
    })
  })
  $(window).on('resize', function () {
    menu_event()
  })

  function menu_event() {
    var h = $(window).width()
    $('.submenu').on('click', function () {
      if (h < 992) {
        $('.submenu ul').removeClass('active')
        $(this).find('ul').toggleClass('active')
      }
    })
  }

})(window.jQuery)

// 获取 URL 参数
var $urlp = function (p) {
  var query = location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == p) { return pair[1] }
  }
  return false
}