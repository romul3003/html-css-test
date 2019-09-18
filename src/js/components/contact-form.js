import is from 'is_js'
const form = document.forms.contactForm

form.addEventListener('submit', onSubmitHandler)

function onSubmitHandler(event) {
  event.preventDefault()

	const email = this.elements.email
	const errorMessage = 'invalid email'

	if (!is.email(email.value.trim())) {
		email.classList.add('invalid')
		email.nextElementSibling.textContent = errorMessage
		email.nextElementSibling.classList.add('error-message')
		return
	} else {
		email.classList.remove('invalid')
		email.nextElementSibling.textContent = ''
		email.nextElementSibling.classList.remove('error-message')
	}

	for (let elem of this.elements) {
		if (elem.dataset.element === 'input' && elem.value.trim().length) {
			console.log(`${elem.name}: ${elem.value}`)
		}
	}

	alert('Form submitted Successfully')
	this.reset()
}

