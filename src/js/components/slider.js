import $ from 'jquery'
import 'slick-carousel'

$('#slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		}
	]
})
	.fadeTo( 100, 1);
