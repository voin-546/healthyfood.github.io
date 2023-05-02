$(".single-item").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.appearance').click(function() {
    $('*').toggleClass("dark");
    $(this).toggleClass("switch");
  });
  $(document).ready(function(){
    $('.hamburger').click(function(){
      $(this).toggleClass('open');
    });
  });
  let hamburger = document.querySelector('.hamburger');
hamburger.onclick = function () {
  let navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
}
  