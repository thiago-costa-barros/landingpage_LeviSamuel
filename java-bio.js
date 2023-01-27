var swiper = new Swiper(".mySwiperBio", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-paginationBio",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-nextBio",
      prevEl: ".swiper-button-prevBio",
    },
  });