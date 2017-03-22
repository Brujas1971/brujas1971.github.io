var docHeight = window.innerHeight;
var docWidth = window.innerWidth;

$(document).ready(function (e) {
  
  $(document).scrollTop(0);
  
  $(document).scroll(function (e) {
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
  $(".scrollMore").click(function (e) {
    scrollToStart(1500);
  });
  $(".logo").click(function (e) {
    scrollToStart(1500);
  });

  function scrollToStart(time) {
    $("html, body").animate({
      scrollTop: docHeight * 1.85
    }, time);
  }
});
/*
//  Programatically sets height & width of image parent container
//  Apparently is not necessary

$(window).on("load", function () {
  
  $(".tilt-effect").each(function (e) {
    $(this).parent().attr("height", $(this).height());
    $(this).parent().attr("width", docWidth);
  });
});
*/