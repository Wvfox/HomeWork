export function menuFunction() {
	const menuIcon = document.querySelector('.menu__icon')
	const menuBody = document.querySelector('.menu__body')
	if (menuIcon) {
		/* Open/close Menu-burger */
		menuIcon.addEventListener('click', e => {
			document.body.classList.toggle('body--lock')
			menuIcon.classList.toggle('menu--active')
			menuBody.classList.toggle('menu--active')
		})

		/* Scroll from link to block */
		const menuLinks = document.querySelectorAll('[data-anchor]')
		if (menuLinks.length > 0) {
			menuLinks.forEach(link => {
				link.addEventListener('click', e => {
					if (
						e.target.dataset.anchor &&
						document.querySelector(e.target.dataset.anchor)
					) {
						const topValue =
							document
								.querySelector(e.target.dataset.anchor)
								.getBoundingClientRect().top + scrollY

						if (menuIcon.classList.contains('menu--active')) {
							document.body.classList.remove('body--lock')
							menuIcon.classList.remove('menu--active')
							menuBody.classList.remove('menu--active')
						}

						window.scrollTo({
							top: topValue,
							behavior: 'smooth',
						})
						e.preventDefault()
					}
					// Добавления якоря для логотипа
					else if (
						e.target.parentElement.dataset.anchor &&
						document.querySelector(e.target.parentElement.dataset.anchor)
					) {
						const topValue =
							document
								.querySelector(e.target.parentElement.dataset.anchor)
								.getBoundingClientRect().top + scrollY

						window.scrollTo({
							top: topValue,
							behavior: 'smooth',
						})
						e.preventDefault()
					}
				})
			})
		}
	}
}
