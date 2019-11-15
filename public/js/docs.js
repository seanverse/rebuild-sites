var $ = $ || window.jQuery
$(document).ready(function () {
  var current = $('.book-summary a[href="' + location.pathname + '"]')
  current.last().parent().addClass('active')

  $('.markdown-section p>img').each(function () {
    $(this).parent().addClass('text-center')
  })
  $('.markdown-section a').each(function () {
    if (($(this).attr('href') || '').substr(0, 4) === 'http') $(this).attr('target', '_blank')
  })
})