var modal = document.querySelector('.nav');
var modalShadow2 = document.querySelector('.nav-shadow');
var mOpenBtn = document.querySelector('.header--burger-btn');
var mCloseBtn = document.querySelector('.nav--close-btn');
var mList = document.querySelector('.nav--list');


	mOpenBtn.onclick = function() {
		if(screen.width < 1360) {
		modal.setAttribute("style", "display:flex");
		modalShadow2.setAttribute("style", "display:block");
		};
	};
	mCloseBtn.onclick = function() {
		if(screen.width < 1360) {
		modal.setAttribute("style", "display:none");
		modalShadow2.setAttribute("style", "display:none");
		};
	};
	mList.onclick = function() {
		if(screen.width < 1360) {
		modal.setAttribute("style", "display:none");
		modalShadow2.setAttribute("style", "display:none");
		};
	};
	modalShadow2.onclick = function() {
		if(screen.width < 1360) {
		modal.setAttribute("style", "display:none");
		modalShadow2.setAttribute("style", "display:none");
		};	
	};