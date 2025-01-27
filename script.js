const swiper = new Swiper(".mySwiper0", {
    slidesPerView: 1,
    spaceBetween: 30, 
    loop: true, 
    autoplay: {
      delay: 2000, 
      disableOnInteraction: false, 
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true, 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  const customSwiper = new Swiper(".custom-swiper", {
    slidesPerView: 3,
    spaceBetween: 20, 
    loop: true,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });