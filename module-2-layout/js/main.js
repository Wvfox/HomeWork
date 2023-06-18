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
	let show = false

	videoBtn.addEventListener('click', e => {
		video.classList.add('popup--show')
		show = true
	})
	document.addEventListener('keydown', e => {
		if (e.code === 'Escape' && show) {
			videoSrc.pause()
			video.classList.remove('popup--show')
			show = false
		}
	})
}
