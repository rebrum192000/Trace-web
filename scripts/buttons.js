var btn1 = document.querySelector('.possibilities__button1');
var btn2 = document.querySelector('.possibilities__button2');
var btn3 = document.querySelector('.possibilities__button3');

var text1 = document.querySelector('.possibilities__text1');
var text2 = document.querySelector('.possibilities__text2');
var text3 = document.querySelector('.possibilities__text3');


btn2.onclick =  function() {
if (text2.style.display !== 'none') {
        text2.style.display = 'none';
	}
    else {
        text2.style.display = 'block';
    }
    text1.style.display = "none";
	text3.style.display = "none";
}

btn1.onclick =  function() {
	if (text1.style.display !== 'none') {
        text1.style.display = 'none';
	}
    else {
        text1.style.display = 'block';
    }

    text2.style.display = "none";
	text3.style.display = "none";
}

btn3.onclick =  function() {
	if (text3.style.display !== 'none') {
        text3.style.display = 'none';
	}
    else {
        text3.style.display = 'block';
    }

    text2.style.display = "none";
	text1.style.display = "none";
}