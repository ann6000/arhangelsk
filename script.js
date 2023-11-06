document.addEventListener('DOMContentLoaded', function() {
	const menuSign = document.querySelector('.menu-sign');
	const menuBar = document.querySelector('.menu-bar');
	const closeMenu = document.querySelector('.close-menu');
	const menuText = document.querySelector('.menu-text');

	menuSign.addEventListener('click', function() {
			menuBar.classList.toggle('active');
			menuSign.style.display = 'none';
			closeMenu.style.display = 'block';
			menuText.style.display = 'block'; // Show the text
	});

	closeMenu.addEventListener('click', function() {
			menuBar.classList.remove('active');
			closeMenu.style.display = 'none';
			menuSign.style.display = 'block';
			menuText.style.display = 'none'; // Hide the text
	});
});
