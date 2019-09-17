var $ = $ || window.jQuery
$(document).ready(function () {
  var current = $('.book-summary a[href="' + location.pathname + '"]')
  current.parent().addClass('active')

  $('.markdown-section p>img').each(function () {
    $(this).parent().addClass('text-center')
  })
  $('.markdown-section a').each(function () {
    var ah = $(this).attr('href')
    if (ah.substr(0, 4) === 'http') $(this).attr('target', '_blank')
    else if (ah.indexOf('.md') > -1) $(this).attr('href', ah.substr(0, ah.length - 3))
  })

  var ghpath = location.pathname
  if (!ghpath.indexOf('.md') == -1) ghpath += '.md'
  $('<a title="Edit on GitHub" target="_blank" href="https://github.com/getrebuild/rebuild-sites/edit/master' + ghpath + '"><i class="fa fa-github fa-fw"></i></a>').appendTo('.markdown-section>h1')
})