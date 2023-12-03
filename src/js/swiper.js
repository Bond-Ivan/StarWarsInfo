const swiperConfig = {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {

        400: {
            spaceBetween: -10,
        },

        576: {
            slidesPerView: 2,
            spaceBetween: -10,
        },

        700: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        1620: {
            slidesPerView: 2,
            spaceBetween: 120,
        },
    }
}

const swiperConfigCharacters = {
    effect: "cards",
    grabCursor: true,
};

export { swiperConfig, swiperConfigCharacters };
