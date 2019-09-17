const services = document.querySelector('[data-element="services"]')
services.addEventListener('click', handleBtn)

function handleBtn(event) {
	event.preventDefault()

	const btn = event.target.closest('[data-element="read-more"]')
	if (!btn) return

	const title = btn.closest('.card').querySelector('.card__title').textContent.trim()
	console.log(title)
}