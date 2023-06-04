$(document).ready(function () {
  $("#menu").click(function (e) {
    e.preventDefault();
    $(".sidebar").toggleClass("active");
  });

  if ($(window).width() < 768) {
    $(".sidebar").removeClass("active");
  }
});
