$(document).ready(function () {
    $(".testmonialCarousel").owlCarousel({
      items: 3,
      margin: 16,
      loop: true,
      dots: false,
      nav: true,
      navText: ['<img src="assets/images/icon-svg/arrow-left.svg" alt="right arrow">', '<img src="assets/images/icon-svg/arrow-right.svg" alt="right arrow">'],
      responsive: {
        0: {
          items: 1,
          nav: false,
          // stagePadding: 50,
        },
        800: {
          items: 3,
        }
      }
    });

    // trainers carousel activation
    $(".trainers-carousel").owlCarousel({
      items: 3,
      margin: 24,
      loop: true,
      dots: false,
      nav: true,
      navText: ['<img src="assets/images/icon-svg/arrow-left.svg" alt="right arrow">', '<img src="assets/images/icon-svg/arrow-right.svg" alt="right arrow">'],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        800: {
          items: 4,
        }
      }
    });

    
  });