/* =========================================================== */
/* ====================== Stars Rating ======================= */
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

/* =========================================================== */
/* ====================== Video Popup ======================= */
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

/* =========================================================== */
/* ======================== Mixitup ========================= */
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

/* =========================================================== */
/* ======================== Swiper ========================== */
const swiper = new Swiper('.swiper', {
	loop: false,
	simulateTouch: false,
	slidesPerView: 2,
	spaceBetween: '48',

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.customers__slide-arrow--next',
		prevEl: '.customers__slide-arrow--prev',
	},
})

/* =========================================================== */
/* ======================= Spoiler ========================= */
const spoilersWrapper = document.querySelector('[data-spoilers]')
if (spoilersWrapper) {
	// Инициализация спойлера
	initSpoiler(spoilersWrapper)

	// Функции инициализации оболочки спойлеров
	function initSpoiler(spoilersWrapper) {
		spoilersWrapper.classList.add('spoiler--init')
		initSpoilersBody(spoilersWrapper)
		spoilersWrapper.addEventListener('click', setSpoilerAction)
	}
	// Функция инициализации содержимого спойлеров
	function initSpoilersBody(spoilersWrapper) {
		const spoilerTitles = spoilersWrapper.querySelectorAll('[data-spoiler]')
		if (spoilerTitles.length > 0) {
			spoilerTitles.forEach(spoilerTitle => {
				spoilerTitle.removeAttribute('tabindex')
				if (!spoilerTitle.classList.contains('spoiler--active')) {
					spoilerTitle.nextElementSibling.hidden = true
				}
			})
		}
	}
	// Взаимодействие со спойлерами
	function setSpoilerAction(e) {
		if (
			e.target.hasAttribute('data-spoiler') ||
			e.target.closest('[data-spoiler]')
		) {
			//Кнопка-заголовок
			const spoilerTitle = e.target.hasAttribute('data-spoiler')
				? e.target
				: e.target.closest('[data-spoiler]')
			//Оболочка спойлеров
			const spoilersWrapper = spoilerTitle.closest('[data-spoilers]')
			//Режим аккордеона
			const accordionMode = spoilersWrapper.hasAttribute('data-accordion')
				? true
				: false

			// Если никакой слайд не находится в процессе анимации
			if (!spoilersWrapper.querySelectorAll('.spoiler--animate').length) {
				// Если включен режим аккордеона и текущий слайд не активен,
				// То скрыть все активные спойлеры
				if (
					accordionMode &&
					!spoilerTitle.classList.contains('spoiler--active')
				) {
					hideSpoilersBody(spoilersWrapper)
				}
				// Переключение режима показа/скрытия спойлера
				spoilerTitle.classList.toggle('spoiler--active')
				_spoilerToggle(spoilerTitle.nextElementSibling, 500)
			}
			e.preventDefault()
		}
	}
	// Функция скрытия всех активных спойлеров
	function hideSpoilersBody(spoilersWrapper) {
		const spoilerActiveTitle = spoilersWrapper.querySelector(
			'[data-spoiler].spoiler--active'
		)
		if (spoilerActiveTitle) {
			spoilerActiveTitle.classList.remove('spoiler--active')
			_spoilerHide(spoilerActiveTitle.nextElementSibling, 500)
		}
	}

	/* ==== Функции анимации спойлеров ==== */
	// Функция скрытия содержимого спойлера
	let _spoilerHide = (target, duration = 500) => {
		if (!target.classList.contains('spoiler--animate')) {
			target.classList.add('spoiler--animate')
			target.style.transitionProperty = 'height, margin, padding'
			target.style.transitionDuration = duration + 'ms'
			target.style.height = target.offsetHeight + 'px'
			target.offsetHeight
			target.style.overflow = 'hidden'
			target.style.height = 0
			target.style.paddingTop = 0
			target.style.paddingBottom = 0
			target.style.marginTop = 0
			target.style.marginBottom = 0
			window.setTimeout(() => {
				target.hidden = true
				target.style.removeProperty('height')
				target.style.removeProperty('padding-top')
				target.style.removeProperty('padding-bottom')
				target.style.removeProperty('margin-top')
				target.style.removeProperty('margin-bottom')
				target.style.removeProperty('overflow')
				target.style.removeProperty('transition-duration')
				target.style.removeProperty('transition-property')
				target.classList.remove('spoiler--animate')
			}, duration)
		}
	}
	// Функция показа содержимого спойлера
	let _spoilerShow = (target, duration = 500) => {
		if (!target.classList.contains('spoiler--animate')) {
			target.classList.add('spoiler--animate')
			if (target.hidden) {
				target.hidden = false
			}
			let height = target.offsetHeight
			target.style.overflow = 'hidden'
			target.style.height = 0
			target.style.paddingTop = 0
			target.style.paddingBottom = 0
			target.style.marginTop = 0
			target.style.marginBottom = 0
			target.offsetHeight
			target.style.transitionProperty = 'height, margin, padding'
			target.style.transitionDuration = duration + 'ms'
			target.style.height = height + 'px'
			target.style.removeProperty('padding-top')
			target.style.removeProperty('padding-bottom')
			target.style.removeProperty('margin-top')
			target.style.removeProperty('margin-bottom')
			window.setTimeout(() => {
				target.style.removeProperty('height')
				target.style.removeProperty('overflow')
				target.style.removeProperty('transition-duration')
				target.style.removeProperty('transition-property')
				target.classList.remove('spoiler--animate')
			}, duration)
		}
	}
	// Функция переключения режима показа/скрытия спойлера
	let _spoilerToggle = (target, duration = 500) => {
		if (target.hidden) {
			return _spoilerShow(target, duration)
		} else {
			return _spoilerHide(target, duration)
		}
	}
}
