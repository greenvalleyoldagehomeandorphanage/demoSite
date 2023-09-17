// Smooth scrolling for all links with the class "scroll-link"
$(document).ready(function () {
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();
    var target = $(this).attr("href");
    var offset = $(target).offset().top;
    $("html, body").animate(
      {
        scrollTop: offset,
      },
      1000
    );
  });
});
