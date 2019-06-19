/* Индекс слайда по умолчанию */
var slideIn = 1;
showSlides2(slideIn);

/* Устанавливает текущий слайд */
function curSlide(t) {
    showSlides2(slideIn = t);
}

function plusSlide2() {
    showSlides2(slideIn += 1);
}
setInterval(function() { 
            plusSlide2();
        },3000);

/* Основная функция слайдера */
function showSlides2(t) {
    var j;
    var slidesss = document.getElementsByClassName("slider-pr--item");
    var dotts = document.getElementsByClassName("slider-pr--button");
    if (t > slidesss.length) {
      slideIn = 1;
    }
    if (t < 1) {
        slideIn = slidesss.length;
    }
    for (j = 0; j < slidesss.length; j++) {
        slidesss[j].style.display = "none";
    }
    for (j = 0; j < dotts.length; j++) {
        dotts[j].className = dotts[j].className.replace("slider-pr--button__active", "");
    }

    var pred = slideIn - 1;
    var sled = slideIn + 1;
    if (slideIn < 2) {
        pred = slidesss.length;
    } 
    if (slideIn > slidesss.length - 1 ) {
        sled = 1;
    } 
    for (j = 0; j < slidesss.length; j++) {
        slidesss[j].className = slidesss[j].className.replace("slider-pr--item__prev", "");
        slidesss[j].className = slidesss[j].className.replace("slider-pr--item__next", "");
    }
    slidesss[pred - 1].className += " slider-pr--item__prev";
    slidesss[sled - 1].className += " slider-pr--item__next";
    slidesss[pred - 1].style.display = "block";
    slidesss[sled - 1].style.display = "block";

    slidesss[slideIn - 1].style.display = "block";
    dotts[slideIn - 1].className += " slider-pr--button__active";
};