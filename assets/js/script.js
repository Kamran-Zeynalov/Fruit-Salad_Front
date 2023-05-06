$(document).ready(function () {
  $(".hamburger-icon").on("click", function () {
    $(".side-menu").fadeIn();
  });
  $(".menu-title").on("click", function () {
    $(".side-menu").fadeOut();
  });
  $(".basket-icon").on("click", function () {
    $(".side-basket").fadeIn();
  });
  $(".menu-title").on("click", function () {
    $(".side-basket").fadeOut();
  });


    $(".categories-li").on("click", function () {
    $(".acordion").slideToggle();
  });
      $(".account-li").on("click", function () {
    $(".account-acordion").slideToggle();
  });
  $(".search-icon").on("click", function () {
    $(".search-input").slideToggle();
  });
});
