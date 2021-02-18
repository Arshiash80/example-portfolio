const body = document.querySelector("body")

$(window).scroll(() => {
  if (Number(body.offsetWidth) >= 600) {
    parallax();
  } else {
    $('.parallax--box').css('top', 0)
  }
})
  
function parallax() {

  var wScroll = $(window).scrollTop()
  
  $('.parallax--box').css('top', -10 + (wScroll*.012)+'em')
}
