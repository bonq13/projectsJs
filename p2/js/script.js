const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btn = document.querySelector('.count');
const error = document.querySelector('.error');
const cost = document.querySelector('.cost');
const costInfo = document.querySelector('.cost-info');

const spliter = () => {
	if (price.value != 0 && people.value != 0 && tip.value != 0) {
		const newPrice = parseFloat(price.value);
		const newPeople = parseInt(people.value);
		const newTip = parseFloat(tip.value);

		let temp = (newPrice + newPrice * newTip) / newPeople;

		cost.textContent = temp.toFixed(2);
		costInfo.style.display = 'block';
		error.textContent = '';
	} else {
		error.textContent = 'Wprować poprawne wartości!';
		costInfo.style.display = 'none';
	}
};

btn.addEventListener('click', spliter);
