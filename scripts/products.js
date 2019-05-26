/* Индекс слайда по умолчанию */
var prodIndex = 1;
showSlidesPR(prodIndex);

/* Устанавливает текущий слайд */
function currentPR(k) {
    showSlidesPR(prodIndex = k);
}

/* Основная функция слайдера */
function showSlidesPR(k) {
    var l;
    var product = document.getElementsByClassName('product');
    if (k > product.length) {
      prodIndex = 1;
    }
    if (k < 1) {
        prodIndex = product.length;
    }
    for (l = 0; l < product.length; l++) {
        product[l].className = product[l].className.replace("product-active", "");
    }
    console.log(prodIndex);
    product[prodIndex - 1].className += " product-active";
}
