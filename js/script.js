const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	loop: true,
	// пагинация
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// навигация
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
	burger.classList.toggle('header__burger--active');
	menu.classList.toggle('header__nav--active');
	document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {
	el.addEventListener('click', function () {
		burger.classList.remove('header__burger--active');
		menu.classList.remove('header__nav--active');
		document.body.classList.remove('stop-scroll');
	})
});

let form = document.querySelector('.header__form');
let clos = document.querySelector('.header__closer');
let search = document.querySelector('.header__search');
let formItem = form.querySelectorAll('.form-item');
search.addEventListener('click', function () {
	form.classList.toggle('header__form--active');

});

clos.addEventListener('click', function () {
	form.classList.remove('header__form--active');
});
