const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keyup', inputHandler);

function inputHandler(e) {
  output.value = input.value;
}