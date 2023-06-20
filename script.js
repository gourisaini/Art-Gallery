

$('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });


  function showText(toggleText) {
    toggleText.classList.toggle("active");
}