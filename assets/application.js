document.addEventListener("DOMContentLoaded", function(){
    // ----------------- *
    // GLOBAL VARIABLES
    // ----------------- *
    const product_variant_option_labels = document.querySelectorAll('label');
    // ----------------- *
    // SWIPER CAROUSELS
    // ----------------- *
    var swiper = new Swiper('.product-carousel', {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    // ----------------- *
    // LAZYLOAD IMAGES
    // ----------------- *
    var lazyLoadInstance = new LazyLoad({
        elements_selector: "img"
    });
    // ----------------- *
    // CLICK HANDLERS
    // ----------------- *
})
