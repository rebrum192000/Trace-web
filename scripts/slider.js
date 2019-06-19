/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlide() {
    showSlides(slideIndex += 1);
}
setInterval(function() { 
            plusSlide();
        },3000);


/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("development__item");
    var dots = document.getElementsByClassName("development__button");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("development__button__active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " development__button__active";
}