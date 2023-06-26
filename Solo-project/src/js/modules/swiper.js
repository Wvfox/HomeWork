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
		slidesPerView: 1,

		breakpoints: {
			1500: {
				slidesPerView: 5,
			},
			1300: {
				slidesPerView: 4,
			},
			1100: {
				slidesPerView: 3,
			},
			900: {
				slidesPerView: 2,
			},
			650: {
				slidesPerView: 1.5,
			},
		},
	})
	const developmentSlider = new Swiper('.swiper--development', {
		simulateTouch: true,
		freeMode: true,
		spaceBetween: 24,
		slidesPerView: 1,

		breakpoints: {
			1700: {
				slidesPerView: 2.8,
			},
			1400: {
				slidesPerView: 2.6,
			},
			1300: {
				slidesPerView: 2.5,
			},
			1200: {
				slidesPerView: 2.4,
			},
			1120: {
				slidesPerView: 2.3,
			},
			1050: {
				slidesPerView: 2.2,
			},
			1020: {
				slidesPerView: 2.1,
			},
			950: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 1.9,
			},
			850: {
				slidesPerView: 1.7,
			},
			800: {
				slidesPerView: 1.6,
			},
			750: {
				slidesPerView: 1.5,
			},
			700: {
				slidesPerView: 1.4,
			},
			650: {
				slidesPerView: 1.3,
			},
			600: {
				slidesPerView: 1.2,
			},
			550: {
				slidesPerView: 1.1,
			},
		},
	})
}
