export function anchorFunction() {
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
