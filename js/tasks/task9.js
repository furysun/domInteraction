export function task9() {
  const root = document.getElementById('task9');

  const div = document.createElement('div');
  div.innerText = 'say';
  div.onclick = sayMif;

  root.appendChild(div);

  sayBow();
}

function sayMif(event) {
  console.log('mif');
  console.log(event);
}

function sayBow(event) {
  console.log('bow');
  console.log(event);
}