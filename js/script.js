//(function() {

var btnClose = document.querySelector(".header__toogle");
var headerInner = document.querySelector(".header__inner");
var headerNav = document.querySelector(".header-nav");
var btnReviews_1 = document.querySelector("#btnReviews_1");
var btnReviews_2 = document.querySelector("#btnReviews_2");
var btnReviews_3 = document.querySelector("#btnReviews_3");
var arrowLeft = document.querySelector("#left");
var arrowRight = document.querySelector("#right");
var sliderReviews = document.querySelector(".slider-reviews__inner");
var sliderLenght = sliderReviews.querySelectorAll(".slider-reviews__item");
var btnTable_1 = document.querySelector("#btnTable_1");
var btnTable_2 = document.querySelector("#btnTable_2");
var btnTable_3 = document.querySelector("#btnTable_3");
var table = document.querySelector(".price-table__inner");

function sw(s) {
    switch (s) {
        case 0:
            sliderReviews.classList.remove("slider-reviews__inner--third");
            sliderReviews.classList.remove("slider-reviews__inner--second");
            break;
        case 1:
            sliderReviews.classList.remove("slider-reviews__inner--third");
            sliderReviews.classList.add("slider-reviews__inner--second");
            break;
        case 2:
            sliderReviews.classList.remove("slider-reviews__inner--second");
            sliderReviews.classList.add("slider-reviews__inner--third");
            break;
    };
};

function swt(s) {
    switch (s) {
        case 0:
            table.classList.remove("price-table__inner--right");
            table.classList.add("price-table__inner--left");
            break;
        case 1:
            table.classList.remove("price-table__inner--left", "price-table__inner--right");
            break;
        case 2:
            table.classList.remove("price-table__inner--left");
            table.classList.add("price-table__inner--right");
            break;
    };
};

function pgr(s) {
    switch (s) {
        case 0:
            btnReviews_1.classList.add("paginator__item--state_active");
            btnReviews_2.classList.remove("paginator__item--state_active");
            btnReviews_3.classList.remove("paginator__item--state_active");
            break;
        case 1:
            btnReviews_1.classList.remove("paginator__item--state_active");
            btnReviews_3.classList.remove("paginator__item--state_active");
            btnReviews_2.classList.add("paginator__item--state_active");
            break;
        case 2:
            btnReviews_2.classList.remove("paginator__item--state_active");
            btnReviews_1.classList.remove("paginator__item--state_active");
            btnReviews_3.classList.add("paginator__item--state_active");
            break;
    };
};

function pgt(s) {
    switch (s) {
        case 0:
            btnTable_1.classList.add("paginator__item--state_active");
            btnTable_2.classList.remove("paginator__item--state_active");
            btnTable_3.classList.remove("paginator__item--state_active");
            break;
        case 1:
            btnTable_1.classList.remove("paginator__item--state_active");
            btnTable_3.classList.remove("paginator__item--state_active");
            btnTable_2.classList.add("paginator__item--state_active");
            break;
        case 2:
            btnTable_3.classList.add("paginator__item--state_active");
            btnTable_1.classList.remove("paginator__item--state_active");
            btnTable_2.classList.remove("paginator__item--state_active");
            break;
    };
};

// menu
//=============================================
btnClose.addEventListener("click", function(e) {
    e.preventDefault();
    btnClose.classList.toggle("header__toogle--state_close");
    headerInner.classList.toggle("header__inner--state_active");
    headerNav.classList.toggle("header-nav--state_active");
});

// reviews
//============================================
btnReviews_1.addEventListener("click", function(e) {
    e.preventDefault();
    var s = 0;
    sw(s);
    pgr(s);
});

//**************************************
btnReviews_2.addEventListener("click", function(e) {
    e.preventDefault();
    var s = 1;
    sw(s);
    pgr(s);
});

//****************************************
btnReviews_3.addEventListener("click", function(e) {
    e.preventDefault();
    var s = 2;
    sw(s);
    pgr(s);
});

//****************************************
var s = 0;
var lenghtUp = sliderLenght.length - 2;

arrowRight.addEventListener("click", function(e) {
    e.preventDefault();
    if (s <= lenghtUp) {
        s++;
        sw(s);
        console.log("s+", s);
    };
});

arrowLeft.addEventListener("click", function(e) {
    e.preventDefault();
    if (s > 0) {
        s -= 1;
        sw(s);
        console.log("s-", s);
    };
});

//=============================================
var startPoint = {};
var nowPoint;
var ldelay;
sliderReviews.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    startPoint.x = event.changedTouches[0].pageX;
    startPoint.y = event.changedTouches[0].pageY;
    ldelay = new Date();
}, false);
/*Ловим движение пальцем*/
sliderReviews.addEventListener('touchmove', function(event) {
    event.preventDefault();
    event.stopPropagation();
    var otk = {};
    nowPoint = event.changedTouches[0];
    otk.x = nowPoint.pageX - startPoint.x;
    /*Обработайте данные*/
    /*Для примера*/
    if (Math.abs(otk.x) > 150) {
        if (otk.x < 0) {
            if (s <= lenghtUp) {
                s++;
                sw(s);
                //pgr(s);
                //console.log("z+", z);
            };
        }
        if (otk.x > 0) {
            if (s > 0) {
                s -= 1;
                sw(s);
                //pgr(s);
                //console.log("z-", z);
            };
        }
        startPoint = {
            x: nowPoint.pageX,
            y: nowPoint.pageY
        };
    }
}, false);
/*Ловим отпускание пальца*/
sliderReviews.addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();
    var pdelay = new Date();
    nowPoint = event.changedTouches[0];
    var xAbs = Math.abs(startPoint.x - nowPoint.pageX);
    var yAbs = Math.abs(startPoint.y - nowPoint.pageY);
    if ((xAbs > 20 || yAbs > 20) && ((pdelay.getTime() - ldelay.getTime()) < 200)) {
        if (xAbs > yAbs) {
            if (nowPoint.pageX < startPoint.x) {
                if (s <= lenghtUp) {
                    s++;
                    sw(s);
                    pgr(s);
                    console.log("s+", s);
                };
            } else {
                if (s > 0) {
                    s -= 1;
                    sw(s);
                    pgr(s);
                    console.log("s-", s);
                };
            }
        } else {
            if (nowPoint.pageY < startPoint.y) { /*СВАЙП ВВЕРХ*/ } else { /*СВАЙП ВНИЗ*/ }
        }
    }
}, false);

// table 
//=============================================
btnTable_2.addEventListener("click", function(e) {
    e.preventDefault();
    var s = 1;
    swt(s);
    pgt(s);
});

/*************************************************/
btnTable_1.addEventListener("click", function(e) {
    e.preventDefault();
    var s = 0;
    swt(s);
    pgt(s);
});

/*************************************************/
btnTable_3.addEventListener("click", function(e) {
    e.preventDefault();
    var s = 2;
    swt(s);
    pgt(s);
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
//})();