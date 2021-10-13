const myCarousel = document.querySelector('#indexHeroCarousel')
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  wrap: false,
  autoplay: false
})