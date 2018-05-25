console.log('loaded');
$(window).scroll(function() {

  var windowScroll = $(this).scrollTop();
  var windowHeight = $(window).height();
  var clothesPics = $('.clothes-pics');
  var logo = $('.logo');
  var backBird = $('.back-bird');
  var foreBird = $('.fore-bird');
  var largeWindow = $('.large-window');
  // offset el.getBoundingClientRect()
//   var rect = el.getBoundingClientRect();
//
// {
//   top: rect.top + document.body.scrollTop,
// }
  // Make logo scroll speed the fulcrum between the foreground image and the background image
  logo.css({
    'transform' : 'translate(0px, '+ windowScroll /2 +'%)'
  });
  // The background image will move the slowest
  backBird.css({
    'transform' : 'translate(0px, '+ windowScroll /4 +'%)'
  });
  // foreground image moves up, instead of down, and gets a negative property
  // Anything less than 40 makes the image scroll up really fast
  foreBird.css({
    'transform' : 'translate(0px, -'+ windowScroll /40 +'%)'
  });

  // If the clothing pictures reach 20% (or window.height / 1.2) into the viewport
  if (windowScroll > clothesPics.offset().top - windowHeight / 1.2) {
    // Add a class of is-showing to each picture
    $('.clothes-pics figure').each(function(i) {
      setTimeout(function() {
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i + 1));
    });
  }

  if(windowScroll > clothesPics.offset().top - windowHeight) {
    // This makes sure the model's face is at the top of the circle when its at the top of the page.
    largeWindow.css({
      'background-position': 'center ' + (windowScroll - largeWindow.offset().top) + 'px'
    })
    // Fade in promotial offer
    var opacity = (windowScroll - largeWindow.offset().top + 300) / (windowScroll / 4.5);

    $('.window-tint').css({ 'opacity': opacity })
  }

  if(windowScroll > $('.blog-posts').offset().top - windowHeight) {
    // This moves the blog posts according to scroll
    var offset = Math.min(0, windowScroll - $('.blog-posts').offset().top + windowHeight - 600);

    $('.post-1').css({ 'transform' : 'translate(' + offset + 'px, '+ Math.abs(offset * 0.1) + 'px)'});
    
    $('.post-3').css({ 'transform' : 'translate(' + Math.abs(offset) + 'px, '+ Math.abs(offset * 0.1) + 'px)'});
  }
});
