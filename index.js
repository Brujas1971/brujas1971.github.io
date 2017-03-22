$(document).ready(function (e) {

  var docHeight = window.innerHeight;
  var docWidth = window.innerWidth;
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

    /*var movementStrength = 10;
    var height = movementStrength / docHeight;
    var width = movementStrength / docWidth;
    $(".content__img").mousemove(function (e) {
      var pageX = e.pageX - ($(window).width() / 2);
      var pageY = e.pageY - ($(window).height() / 2);
      var newvalueX = width * pageX * -1 - 25;
      var newvalueY = height * pageY * -1 - 50;
      $(this).css("background-position", newvalueX + "px     " + newvalueY + "px");
    });*/


  });

  $(".scrollMore").click(function (e) {
    scrollToStart();
  });

  function scrollToStart() {
    $("html, body").animate({
      scrollTop: docHeight * 1.85
    }, 1500);
  }
});
