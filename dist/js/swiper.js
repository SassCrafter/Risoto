var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })