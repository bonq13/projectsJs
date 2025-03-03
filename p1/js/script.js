const search = document.querySelector('.search');
const liItems = document.querySelectorAll('li');

const checkText = (e) => {
	const text = e.target.value.toLowerCase();

	liItems.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block';
		} else {
			el.style.display = 'none';
		}
	});
};

search.addEventListener('keyup', checkText);
