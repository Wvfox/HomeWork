export function catalogFunction() {
	const catalog = document.querySelector('.catalog')
	if (catalog) {
		catalog.addEventListener('click', e => {
			if (
				e.target.closest('.catalog__mode') &&
				!e.target.classList.contains('catalog__mode--active') &&
				!e.target.closest('.catalog__mode--active')
			) {
				catalog
					.querySelector('.catalog__mode--active')
					.classList.remove('catalog__mode--active')
				e.target
					.closest('.catalog__mode')
					.classList.add('catalog__mode--active')
				catalog
					.querySelector('.catalog__body')
					.classList.toggle('catalog__body--switch')
			}
		})
	}
}
