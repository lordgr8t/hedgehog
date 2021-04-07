// mobile menu

function openmenu(){
	$('.mobile-header-content').removeClass("mobile-header-content-close");
	$('.mobile-header-content').addClass("mobile-header-content-open");
}

function closemenu(){
	$('.mobile-header-content').removeClass("mobile-header-content-open");	
	$('.mobile-header-content').addClass("mobile-header-content-close");
}

// slider

$('.slider-form__slider').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
	{
		breakpoint: 1100,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
});




$("body > section.slider-form > div > button.slick-prev.slick-arrow").text(" ").append('<img src="./img/arrow_back.svg"; />');
$("body > section.slider-form > div > button.slick-next.slick-arrow").text(" ").append('<img src="./img/arrow_next.svg"; />'); 

// dell
// $("body > section.slider-form > div > button.slick-prev.slick-arrow").hide();
// $("body > section.slider-form > div > button.slick-next.slick-arrow").hide();
// dell

