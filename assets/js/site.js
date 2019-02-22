(function ($) {
  evt_submenu();

  window['sr'] = new ScrollReveal();

  if ($('.menu-trigger')['length']) {
    $('.menu-trigger').on('click', function () {
      $(this)['toggleClass']('active');
      $('.header-area .nav')['slideToggle'](200)
    })
  };

  $('a[href*=\#]:not([href=\#])').on('click', function () {
    if (location['pathname']['replace'](/^\//, '') == this['pathname']['replace'](/^\//, '') && location['hostname'] == this['hostname']) {
      var _hash = $(this['hash']);
      _hash = _hash['length'] ? _hash : $('[name=' + this['hash']['slice'](1) + ']');
      if (_hash['length']) {
        var w = $(window)['width']();
        if (w < 991) {
          $('.menu-trigger')['removeClass']('active');
          $('.header-area .nav')['slideUp'](200)
        };
        $('html,body')['animate']({
          scrollTop: (_hash['offset']()['top']) - 100
        }, 700);
        return false
      }
    }
  });

  if ($('.count-item')['length']) {
    $('.count-item strong')['counterUp']({
      delay: 10,
      time: 1000
    })
  };

  if ($('.page-gallery')['length'] && $('.page-gallery-wrapper')['length']) {
    $('.page-gallery')['magnificPopup']({
      type: 'image',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out'
      }
    })
  };

  $(window).on('load', function () {
    if ($('.cover')['length']) {
      $('.cover')['parallax']({
        imageSrc: $('.cover')['data']('image'),
        zIndex: '1'
      })
    };
  });
  $(window).on('resize', function () {
    evt_submenu()
  });

  function evt_submenu() {
    var h = $(window)['width']();
    $('.submenu').on('click', function () {
      if (h < 992) {
        $('.submenu ul')['removeClass']('active');
        $(this)['find']('ul')['toggleClass']('active')
      }
    })
  }
})(window['jQuery'])