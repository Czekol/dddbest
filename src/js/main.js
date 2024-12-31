// Hamburger
const hamburgerIcon = document.querySelector('.nav__hamburger');
const navLinksBox = document.querySelector('.nav__links');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav__links-link');
// Faq
const faqBox = document.querySelectorAll('.faq__box-container');
// CurrentYear
const year = document.querySelector('.footer__copyright-year');

const hamburgerMenu = () => {
	if (window.innerWidth < 1024) {
		navLinksBox.classList.toggle('show');
		body.classList.toggle('stop-scrolling');
	}
};

const slideDown = e => {
	const faq__box = e.target.closest('.faq__box');
	const faq__boxText = faq__box.querySelector('.faq__box-text');
	const faq__boxIcon = faq__box.querySelector('.faq__box-icon');

	faq__boxText.classList.toggle('show');
	faq__boxIcon.setAttribute('src', '/dist/img/minus.jpg');

	if (!faq__boxText.classList.contains('show')) {
		faq__boxIcon.setAttribute('src', '/dist/img/plus.jpg');
	}
};

const currentYear = () => {
	year.textContent = new Date().getFullYear();
};

currentYear();

hamburgerIcon.addEventListener('click', hamburgerMenu);
navLinks.forEach(el => el.addEventListener('click', hamburgerMenu));
faqBox.forEach(el => el.addEventListener('click', slideDown));
