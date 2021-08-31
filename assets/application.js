// Put your application javascript here
document.addEventListener("DOMContentLoaded", () => {
    // ----------------- *
    // GLOBAL VARIABLES
    // ----------------- *
    const searchForm = document.querySelector('.search-form');
    // ----------------- *
    // LAZYLOAD IMAGES
    // ----------------- *
    var lazyLoadInstance = new LazyLoad({
        elements_selector: "img"
    });
    // ----------------- *
    // SWIPER CAROUSELS
    // ----------------- *
    var swiper = new Swiper('.product--carousel', {
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
    // CLICK FUNCTIONS
    // ----------------- *
    document.addEventListener("click", (e) => {
        e.target.hasAttribute('data-toggle-search') ?
            searchForm.classList.toggle('show') : null
    });
});