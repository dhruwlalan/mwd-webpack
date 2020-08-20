import '../sass/main.scss';
import greet from './greet.js';

document.getElementById('greet-btn').addEventListener('click', () => {
	const name = document.getElementById('input').value;
	const output = greet(name);
	document.getElementById('output').textContent = output;
});
