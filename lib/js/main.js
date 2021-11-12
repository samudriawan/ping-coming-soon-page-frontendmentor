const submitBtn = document.getElementById('submit');
const inputEmail = document.getElementById('email');

window.onload = () => {
	inputEmail.value = '';
};

submitBtn.addEventListener('click', validate);

function validate(e) {
	const errorMsg = document.getElementById('error-email');

	if (inputEmail.value == '') {
		errorMsg.innerHTML = 'Whoops! It looks like you forgot to add your email';
		errorMsg.style.display = 'block';
		inputEmail.style.outlineColor = 'hsl(354, 100%, 66%)';
		inputEmail.focus();
		e.preventDefault();
	} else if (!emailIsValid(inputEmail.value)) {
		errorMsg.style.display = 'block';
		errorMsg.innerHTML = 'Please provide a valid email address';
		inputEmail.style.outlineColor = 'hsl(354, 100%, 66%)';
		e.preventDefault();
		inputEmail.focus();
		return false;
	}

	return true;
}
function emailIsValid(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
