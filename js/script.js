$(document).ready(function() {
  //toggler-btn
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });

  //sticky navbar and less padding
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 700) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });

  //smooth scroll
  $(".nav-item a").click(function() {
    link.preventDefault();
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 25
      },
      3000
    );
  });

  //magnific popup
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    // gallery
    gallery: {
      enabled: true
    }
  });
});
