export function swiperSliders() {
	const partnersSlider = new Swiper('.swiper--partner', {
		simulateTouch: true,
		freeMode: {
			enabled: true,
			momentumBounceRatio: 0.5,
			momentumRatio: 0.5,
			momentumVelocityRatio: 0.5,
		},
		spaceBetween: 24,
		slidesPerView: 5.4,

		// breakpoints: {
		// 	992: {

		// 	},
		// },
	})
	const developmentSlider = new Swiper('.swiper--development', {
		simulateTouch: true,
		freeMode: true,
		spaceBetween: 24,
		slidesPerView: 2.8,

		// breakpoints: {
		// 	992: {

		// 	},
		// },
	})
}
