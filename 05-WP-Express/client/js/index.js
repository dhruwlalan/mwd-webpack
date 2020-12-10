import './assets';

///start///
const greet = (name) => `Welcome, ${name}!`;

document.getElementById('greet-btn').addEventListener('click', () => {
   const input = document.getElementById('input').value;
   if (input) {
      const output = greet(input);
      document.getElementById('output').textContent = output;
   } else {
      document.getElementById('output').textContent = '';
   }
});
