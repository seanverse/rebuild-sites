(function ($) {
  let current = $('.book-summary a[href="' + location.pathname + '"]')
  current.parent().addClass('active')

  $('<a title="Edit on GitHub" target="_blank" href="https://github.com/getrebuild/website/edit/master' + location.pathname + '.md"><i class="fa fa-github fa-fw"></i></a>').appendTo('.markdown-section>h1')

  $('..markdown-section p>img').each(function () {
    $(this).parent().addClass('text-center')
  })

})(window.jQuery)