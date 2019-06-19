var modalForm1 = document.querySelector('.modal__form--1');
var modalForm2 = document.querySelector('.modal__form--2');
var mOpenBtn1 = document.querySelector('.jsButton1');
var mOpenBtn2 = document.querySelector('.jsButton2');
var mOpenBtn3 = document.querySelector('.jsButton3');
var mOpenBtn4 = document.querySelector('.jsButton4');
var mOpenBtn5 = document.querySelector('.jsButton5');
var mOpenBtn6 = document.querySelector('.jsButton6');
var mCloseBtn1 = document.querySelector('.modal__form--close-btn--1');
var mCloseBtn2 = document.querySelector('.modal__form--close-btn--2');
var modalShadow = document.querySelector('.modal__form-shadow');

	mOpenBtn1.onclick = function() {
		modalForm1.setAttribute("style", "display:block");
		modalShadow.setAttribute("style", "display:block");
	};
	mOpenBtn2.onclick = function() {
		modalForm2.setAttribute("style", "display:block");
		modalShadow.setAttribute("style", "display:block");
	};
	mOpenBtn3.onclick = function() {
		modalForm2.setAttribute("style", "display:block");
		modalShadow.setAttribute("style", "display:block");
	};
	mOpenBtn4.onclick = function() {
		modalForm2.setAttribute("style", "display:block");
		modalShadow.setAttribute("style", "display:block");
	};
	mOpenBtn5.onclick = function() {
		modalForm2.setAttribute("style", "display:block");
		modalShadow.setAttribute("style", "display:block");
	};
	mOpenBtn6.onclick = function() {
		modalForm2.setAttribute("style", "display:block");
		modalShadow.setAttribute("style", "display:block");
	};
	
	modalShadow.onclick = function() {
		modalForm1.setAttribute("style", "display:none");
		modalForm2.setAttribute("style", "display:none");
		modalShadow.setAttribute("style", "display:none");
	};
	mCloseBtn1.onclick = function() {
		modalForm1.setAttribute("style", "display:none");
		modalShadow.setAttribute("style", "display:none");
	};
	mCloseBtn2.onclick = function() {
		modalForm2.setAttribute("style", "display:none");
		modalShadow.setAttribute("style", "display:none");
	};