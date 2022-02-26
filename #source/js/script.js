const burgerMenu = document.querySelector('.header__burger');
if (burgerMenu) {
	const menuBody = document.querySelector('.menu');
	burgerMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		burgerMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}