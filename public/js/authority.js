var $ = $ || window.jQuery
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  var SN = $urlp('sn')
  $('#a-query input').val(SN || '')
  if (SN && SN.length === 24) {
    $('#a-query').addClass('hide')
    $('#a-result').removeClass('hide')
    $('#auth-sn').text(SN.toUpperCase())
    $('.box > .wt').text(new Date().toGMTString().replace('GMT', ''))
  }
})