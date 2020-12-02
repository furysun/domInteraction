export function task11() {
  const root = document.getElementById('task11');

  const input = document.createElement('input');
  // input.onchange = sayMif;
  input.oninput = sayMif;
  root.appendChild(input);
}

function sayMif(event) {
  // console.log(  event.target.value);
  event.target.value = event.target.value.replace('a','<3');
}