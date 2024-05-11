// 
jQuery(function($) {
  // Set current year
  $(".year").text(new Date().getFullYear());

  // Initialize slider visibility
  $('.slideVisible').on('init', function () {
    $('.slideVisible').css({"visibility" : "visible"});
  });

  // Initialize slider content
  $('.slider-content').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // Button slide event
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-content').slick('slickGoTo', slideno - 1);
  });

  // Commented out background image changes
  /*
  var images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
  var i = 0;
  $("#particles-js").css("background-image", "url(images/" + images[i] + ")");
  setInterval(function () {
    i++;
    if (i == images.length) {
      i = 0;
    }
    $("#particles-js").fadeOut("slow", function () {
      $(this).css("background-image", "url(images/" + images[i] + ")");
      $(this).fadeIn("slow");
    });
  }, 6000);
  */
});
