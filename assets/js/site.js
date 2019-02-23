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