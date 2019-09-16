(function ($) {
  var sn = $urlp('sn')
  $('#a-query input').val(sn || '')
  if (sn && sn.length === 24) {
    $('#a-query').addClass('hide')
    $('#a-result').removeClass('hide')
    $('#auth-sn').text(sn)
    $('.box > .wt').text(new Date().toGMTString().replace('GMT', ''))
  }

})(window.jQuery)
