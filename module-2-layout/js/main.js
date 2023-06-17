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
		const ratingItems = rating.querySelectorAll('.rating__item')
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index]
			ratingItem.addEventListener('mouseenter', e => {
				// Обновление переменных
				initRatingVars(rating)
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value)
			})
			ratingItem.addEventListener('mouseleave', e => {
				// Обновление активных звезд
				setRatingActiveWidth()
			})
			ratingItem.addEventListener('click', e => {
				// Обновление переменных
				initRatingVars(rating)

				// Отобразить указанную оценку
				ratingValue.innerHTML = `${index + 1}.0`
				setRatingActiveWidth()
			})
		}
	}
}
