// smooth scroll
$(document).ready(function () {
	$(".custom-navbar .link").on('click', function (event) {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500);
		return false;
	});

	window.onscroll = () => {
		toggleTopButton();
	}

});

// navbar toggle
$('#nav-toggle').click(function () {
	$(this).toggleClass('is-active')
	$('ul.nav').toggleClass('show');
});

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopButton() {
	if (document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20) {
		document.getElementById('back-to-top').style.display = "block";
	} else {
		document.getElementById('back-to-top').style.display = "none";
	}

	if (document.body.scrollTop >= 560 ||
		document.documentElement.scrollTop >= 560) {
		$(".link").css("color", "#6c757d")
	} else {
		$(".link").css("color", "white")
	}
}