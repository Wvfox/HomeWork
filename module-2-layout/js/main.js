const rating = document.querySelector('.rating')
if (rating) {
	initRating(rating)

	// Инициализация рейтинга
	function initRating(rating) {
		initRatingVars(rating)
		setRatingActiveWidth()

		if (rating.classList.contains('rating--set')) {
			setRating(rating)
		}
	}

	// Инициализация переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__stars--active')
		ratingValue = rating.querySelector('.rating__value')
	}
	// Изменение ширины активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05
		ratingActive.style.width = `${ratingActiveWidth}%`
	}
	// Возможность указания оценки
	function setRating(rating) {
		rating.addEventListener('mousemove', e => {
			if (e.target.classList.contains('rating__item')) {
				// Обновление активных звезд
				setRatingActiveWidth(e.target.value)
			} else {
				// Возвращение первоначальную ширину активных звезд
				setRatingActiveWidth()
			}
		})
		rating.addEventListener('click', e => {
			if (e.target.classList.contains('rating__item')) {
				// Отобразить указанную оценку
				ratingValue.innerHTML = `${e.target.value}.0`
				setRatingActiveWidth()
			}
		})
	}
}

const videoBtn = document.querySelector('.header__play')
if (videoBtn) {
	const video = document.querySelector('.popup--video')
	const videoSrc = document.querySelector('.video__src')

	videoBtn.addEventListener('click', e => {
		video.classList.add('popup--show')
	})
	document.addEventListener('keydown', e => {
		if (e.code === 'Escape' && video.classList.contains('popup--show')) {
			videoSrc.pause()
			video.classList.remove('popup--show')
		}
	})
}

/* ========= Mixitup ========== */
var mixer = mixitup('.blog__list')

var blogButtonsBox = document.querySelector('.blog__buttons')
if (blogButtonsBox) {
	blogButtonsBox.addEventListener('click', e => {
		if (e.target.classList.contains('blog__mode')) {
			blogButtonsBox.querySelectorAll('.blog__mode').forEach(mode => {
				mode.classList.remove('blog__mode--active')
			})
			e.target.classList.add('blog__mode--active')

			e.preventDefault()
		}
	})
}

/* ========= Swiper ========== */
const swiper = new Swiper('.swiper', {
	loop: true,
	simulateTouch: false,
	slidesPerView: 2,
	spaceBetween: '48',

	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.customers__slide-arrow--next',
		prevEl: '.customers__slide-arrow--prev',
	},
})
