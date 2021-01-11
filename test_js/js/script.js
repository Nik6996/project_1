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




// const status = 'ready'

// if (status === 'ready') {
// 	console.log('готово')
// }
// else if (status === 'pending') {
// 	console.log('не готово')
// }
// else {
// 	console.log('статус не найден')
// }

// let add = () => {
// 	if (add == 100) {
// 		console.log("cto");
// 	}
// 	else if (add === 20) {
// 		console.log("rex")
// 	}
// }
// add(100 - 80);


