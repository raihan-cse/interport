const myCarousel = document.querySelector('#indexHeroCarousel')
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  // wrap: false,
  autoplay: false
})

// small navbar activation
$('.icon-wrapper').on('click', function() {
  $('.header-bottom').collapse('toggle');
  $('body').toggleClass('active');
}); 

// user collapse
$('.user-item-toggle').on('click', function() {
  $('.user-items').collapse('toggle');
}); 