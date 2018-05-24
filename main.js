console.log('loaded');
$(window).scroll(function() {

  var windowScroll = $(this).scrollTop();

  // Make logo scroll speed the fulcrum between the foreground image and the background image
  $('.logo').css({
    'transform' : 'translate(0px, '+ windowScroll /2 +'%)'
  });
  // The background image will move the slowest
  $('.back-bird').css({
    'transform' : 'translate(0px, '+ windowScroll /4 +'%)'
  });
  // foreground image moves up, instead of down, and gets a negative property
  // Anything less than 40 makes the image scroll up really fast
  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ windowScroll /40 +'%)'
  });

  // If the clothing pictures reach 20% (or window.height / 1.2) into the viewport
  if (windowScroll > $('.clothes-pics').offset().top - $(window).height() / 1.2) {
    // Add a class of is-showing to each picture
    $('.clothes-pics figure').each(function(i) {
      setTimeout(function() {
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i + 1));
    });
  }

  if(windowScroll > $('.large-window').offset().top - $(window).height()) {
    // This makes sure the model's face is at the top of the circle when its at the top of the page.
    $('large-window').css({
      'background-position': 'center ' + (windowScroll - $('.large-window').offset().top) + 'px'
    })
    // Fade in promotial offer
    var opacity = (windowScroll - $('.large-window').offset().top + 400) / (windowScroll / 4.5);

    $('.window-tint').css({ 'opacity': opacity })
  }
});
