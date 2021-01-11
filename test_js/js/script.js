$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu,.body-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



// let btn = document.getElementsByClassName('.icon-menu');
// btn[0].onclick = function () {
// 	btn[0].classList.add('.icon-menu__active');
// }




