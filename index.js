$(document).ready(function(e) {

  var docHeight = window.innerHeight;
  $(document).scroll(function(e) {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= 250) {
      $(".nav").addClass("sticky");
      $("video").addClass("sticky");
      $(".content-container").scrollTop(docHeight);
    }
    if (scrollPos < 250) {
      $(".nav").removeClass("sticky");
      $("video").removeClass("sticky");
    }
  });
  $(".scrollMore").click(function(e) {
    scrollToStart();
  });

  function scrollToStart() {
    $("html, body").animate({
      scrollTop: docHeight * 1.85
    }, 1500);
  }
});
