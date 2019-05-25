/* Основная функция слайдера */
var product = document.querySelector('.product');

product.onclick = function () {

    var i;
    for (i = 0; i < product.length; i++) {
        product[i].style.display = "none";
    }
}
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace("active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }