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
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});