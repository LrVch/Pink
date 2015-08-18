(function() {

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

    function btnCl() {
        btnClose.classList.toggle("header__toogle--state_close");
        headerInner.classList.toggle("header__inner--state_active");
        headerNav.classList.toggle("header-nav--state_active");
    };

    // menu
    //=============================================
    btnClose.addEventListener("tap", function(e) {
        e.preventDefault();
        btnCl();
    });

    // reviews
    //============================================
    btnReviews_1.addEventListener("tap", function(e) {
        e.preventDefault();
        var s = 0;
        sw(s);
        pgr(s);
    });

    //**************************************
    btnReviews_2.addEventListener("tap", function(e) {
        e.preventDefault();
        var s = 1;
        sw(s);
        pgr(s);
    });

    //****************************************
    btnReviews_3.addEventListener("tap", function(e) {
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
    var pdelay;
    var xAbs;
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
        if (Math.abs(otk.x) > 200) {
            if (otk.x < 0) {
                if (s <= lenghtUp) {
                    s++;
                    sw(s);
                    pgr(s);
                    console.log("z+", s);
                };
            }
            if (otk.x > 0) {
                if (s > 0) {
                    s -= 1;
                    sw(s);
                    pgr(s);
                    console.log("z-", s);
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
        pdelay = new Date();
        nowPoint = event.changedTouches[0];
        xAbs = Math.abs(startPoint.x - nowPoint.pageX);
        if (xAbs > 50) {
            if (nowPoint.pageX < startPoint.x) {
                //alert("left");
                if (s <= lenghtUp) {
                    s++;
                    sw(s);
                    pgr(s);
                    console.log("s+", s);
                };
            } else {
                //alert("right");
                if (s > 0) {
                    s -= 1;
                    sw(s);
                    pgr(s);
                    console.log("s-", s);
                };
            }
        }
    }, false);

    // table 
    //=============================================
    btnTable_2.addEventListener("tap", function(e) {
        e.preventDefault();
        var s = 1;
        swt(s);
        pgt(s);
    });

    /*************************************************/
    btnTable_1.addEventListener("tap", function(e) {
        e.preventDefault();
        var s = 0;
        swt(s);
        pgt(s);
    });

    /*************************************************/
    btnTable_3.addEventListener("tap", function(e) {
        e.preventDefault();
        var s = 2;
        swt(s);
        pgt(s);
    });

    /*************************************************/
    var startPoint = {};
    var nowPoint;
    var ldelay;
    var pdelay;
    var xAbs;
    table.addEventListener('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();
        startPoint.x = event.changedTouches[0].pageX;
        startPoint.y = event.changedTouches[0].pageY;
        ldelay = new Date();
    }, false);
    /*Ловим движение пальцем*/
    table.addEventListener('touchmove', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var otk = {};
        nowPoint = event.changedTouches[0];
        otk.x = nowPoint.pageX - startPoint.x;
        /*Обработайте данные*/
        /*Для примера*/
        if (Math.abs(otk.x) > 200) {
            if (otk.x < 0) {
                if (s <= lenghtUp) {
                    s++;
                    swt(s);
                    pgt(s);
                    console.log("z+", s);
                };
            }
            if (otk.x > 0) {
                if (s > 0) {
                    s -= 1;
                    swt(s);
                    pgt(s);
                    console.log("z-", s);
                };
            }
            startPoint = {
                x: nowPoint.pageX,
                y: nowPoint.pageY
            };
        }
    }, false);
    /*Ловим отпускание пальца*/
    table.addEventListener('touchend', function(event) {
        event.preventDefault();
        event.stopPropagation();
        pdelay = new Date();
        nowPoint = event.changedTouches[0];
        xAbs = Math.abs(startPoint.x - nowPoint.pageX);
        if (xAbs > 50) {
            if (nowPoint.pageX < startPoint.x) {
                //alert("left");
                if (s <= lenghtUp) {
                    s++;
                    swt(s);
                    pgt(s);
                    console.log("s+", s);
                };
            } else {
                //alert("right");
                if (s > 0) {
                    s -= 1;
                    swt(s);
                    pgt(s);
                    console.log("s-", s);
                };
            }
        }
    }, false);

    // scroll
    //=================================================
    (function() {
        var linkNav = document.querySelectorAll('[href^="#nav"]'),
            V = .5;
        for (var i = 0; i < linkNav.length; i++) {
            linkNav[i].addEventListener('tap', function(e) {
                e.preventDefault();
                btnClose.classList.remove("header__toogle--state_close");
                headerInner.classList.remove("header__inner--state_active");
                headerNav.classList.remove("header-nav--state_active");
                var w = window.pageYOffset,
                    hash = this.href.replace(/[^#]*(.*)/, '$1');
                t = document.querySelector(hash).getBoundingClientRect().top,
                    start = null;
                requestAnimationFrame(step);

                function step(time) {
                    if (start === null) start = time;
                    var progress = time - start,
                        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                    window.scrollTo(0, r);
                    if (r != w + t) {
                        requestAnimationFrame(step)
                    } else {
                        location.hash = hash
                    }
                }
            }, false);
        }
    })();

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
})();
