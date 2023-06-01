const banner = new Swiper('.banner__swiper', {
    spaceBetween: 20,
    slidesPerView: 1,

    navigation: {
        nextEl: '.banner__next',
        prevEl: '.banner__prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1.2,
            navigation: {
                nextEl: null,
                prevEl: null,
            }
        },

        780: {
            slidesPerView: 1
        },
    }
});