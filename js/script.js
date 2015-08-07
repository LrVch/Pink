var btnClose = document.querySelector(".header__toogle");
var headerInner = document.querySelector(".header__inner");
var headerNav = document.querySelector(".header-nav");
var btnReviews_1 = document.querySelector("#btnReviews_1");
var btnReviews_2 = document.querySelector("#btnReviews_2");
var btnReviews_3 = document.querySelector("#btnReviews_3");
var arrowLeft = document.querySelector("#left");
var arrowRight = document.querySelector("#right");
var sliderReviews = document.querySelector(".slider-reviews__inner");
var btnTable_1 = document.querySelector("#btnTable_1");
var btnTable_2 = document.querySelector("#btnTable_2");
var btnTable_3 = document.querySelector("#btnTable_3");
var table = document.querySelector(".price-table__inner");


// menu
//=============================================
btnClose.addEventListener("click", function(e) {
    e.preventDefault();
    btnClose.classList.toggle("header__toogle--state_close");
    headerInner.classList.toggle("header__inner--state_active");
    headerNav.classList.toggle("header-nav--state_active");
});

// paginator reviews
//============================================
btnReviews_1.addEventListener("click", function(e) {
    e.preventDefault();
    btnReviews_1.classList.add("paginator__item--state_active");
    btnReviews_2.classList.remove("paginator__item--state_active");
    btnReviews_3.classList.remove("paginator__item--state_active");

    sliderReviews.classList.remove("slider-reviews__inner--second");
    sliderReviews.classList.remove("slider-reviews__inner--third");
});
//**************************************
btnReviews_2.addEventListener("click", function(e) {
    e.preventDefault();
    btnReviews_2.classList.add("paginator__item--state_active");
    btnReviews_1.classList.remove("paginator__item--state_active");
    btnReviews_3.classList.remove("paginator__item--state_active");

    sliderReviews.classList.add("slider-reviews__inner--second");
    sliderReviews.classList.remove("slider-reviews__inner--third");
});

//****************************************
btnReviews_3.addEventListener("click", function(e) {
    e.preventDefault();
    btnReviews_3.classList.add("paginator__item--state_active");
    btnReviews_2.classList.remove("paginator__item--state_active");
    btnReviews_1.classList.remove("paginator__item--state_active");

    sliderReviews.classList.remove("slider-reviews__inner--second");
    sliderReviews.classList.add("slider-reviews__inner--third");
});

// table 
//=============================================
btnTable_2.addEventListener("click", function(e) {
    e.preventDefault();
    btnTable_2.classList.add("paginator__item--state_active");
    btnTable_1.classList.remove("paginator__item--state_active");
    btnTable_3.classList.remove("paginator__item--state_active");
    table.classList.remove("price-table__inner--left", "price-table__inner--right");
});
/*************************************************/
btnTable_1.addEventListener("click", function(e) {
    e.preventDefault();
    btnTable_1.classList.add("paginator__item--state_active");
    btnTable_2.classList.remove("paginator__item--state_active");
    btnTable_3.classList.remove("paginator__item--state_active");
    table.classList.add("price-table__inner--left");
    table.classList.remove("price-table__inner--right");
});
/*************************************************/
btnTable_3.addEventListener("click", function(e) {
    e.preventDefault();
    btnTable_3.classList.add("paginator__item--state_active");
    btnTable_1.classList.remove("paginator__item--state_active");
    btnTable_2.classList.remove("paginator__item--state_active");
    table.classList.remove("price-table__inner--left");
    table.classList.add("price-table__inner--right");
});


// map
//=================================================
;
var myMap;

ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
            center: [55.03292878, 73.25239250],
            zoom: 15,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: "Собственный значок метки"
        }, {
            iconLayout: "default#image",

            iconImageHref: "http://wp.vcu.edu/enochhale/wp-content/uploads/sites/4392/2014/06/rocket.png",
            iconImageSize: [50, 50],
            iconImageOffset: [-30, -30]
        });
    myMap.geoObjects.add(myPlacemark);
}