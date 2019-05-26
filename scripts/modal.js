var modal = document.querySelector('.nav');
var modalShadow = document.querySelector('.nav-shadow');
var mOpenBtn = document.querySelector('.header--burger-btn');
var mCloseBtn = document.querySelector('.nav--close-btn');
var mList = document.querySelector('.nav--list');


	mOpenBtn.onclick = function() {
		if(screen.width < 1360) {
		modal.setAttribute("style", "display:flex");
		modalShadow.setAttribute("style", "display:block");
		};
	};
	mCloseBtn.onclick = function() {
		if(screen.width < 1360) {
		modal.setAttribute("style", "display:none");
		modalShadow.setAttribute("style", "display:none");
		};
	};
	mList.onclick = function() {
		if(screen.width < 1360) {
		modal.setAttribute("style", "display:none");
		modalShadow.setAttribute("style", "display:none");
		};
	};
	modalShadow.onclick = function() {
		if(screen.width < 1360) {
		modal.setAttribute("style", "display:none");
		modalShadow.setAttribute("style", "display:none");
		};	
	};