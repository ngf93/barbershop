const swiper1 = new Swiper('.swiper-main', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

const swiper2 = new Swiper('.swiper-offers', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
 
});

const swiper3 = new Swiper('.swiper-news', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});