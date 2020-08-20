import './assets.js';
import greet from './greet.js';

import './assets.js';

document.getElementById('greet-btn').addEventListener('click', () => {
	const input = document.getElementById('input').value;
	if (input) {
		const output = greet(input);
		document.getElementById('output').textContent = output;
	} else {
		document.getElementById('output').textContent = '';
	}	
});