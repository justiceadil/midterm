function readMore(){
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");
	if (dots.style.display === "none"){
		dots.style.display = "inline";
		btn.innerHTML="More";
		more.style.display = "none";
	}
	else {
		dots.style.display = "none";
		btn.innerHTML="Close";
		more.style.display = "inline";		
	}
}
function readMore2(){
	var dots2 = document.getElementById("dots2");
	var more2 = document.getElementById("more2");
	var btn2 = document.getElementById("btn2");
	if (dots2.style.display === "none"){
		dots2.style.display = "inline";
		btn2.innerHTML="More";
		more2.style.display = "none";
	}
	else {
		dots2.style.display = "none";
		btn2.innerHTML="Close";
		more2.style.display = "inline";		
	}
}

$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button id="next" type="button" class="slick-btn slick-next">></button>',
    prevArrow: '<button id="prev" type="button" class="slick-btn slick-prev"><</button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});