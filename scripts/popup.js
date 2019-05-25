var popup = document.querySelector('.popup');
var pOpenBtn = document.querySelector('.header--button');
var pCloseBtn = document.querySelector('.popup--close-btn');

pOpenBtn.onclick = function() {
	if (popup.style.display !== 'none') {
        popup.style.display = 'none';
    }
    else {
        popup.style.display = 'block';
    }
};
pCloseBtn.onclick = function() {
	popup.style.display = 'none';
};
