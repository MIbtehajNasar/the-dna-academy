import Swiper from 'swiper/bundle';

jQuery(document).on('turbolinks:load', () => {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
          slidesPerView: 3,
          spaceBetween: 30
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 30
      },
      640: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      320: {
          slidesPerView: 1,
          spaceBetween: 10
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});
