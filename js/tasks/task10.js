export function task10() {
  //кодом  3 елемента - див под пим инпут под ним p

  const root = document.getElementById('task10');

  const div = document.createElement('div');
  div.style.height = '50px';
  div.style.width = '50px';
  div.style.backgroundColor = 'yellow';
  div.onclick = sayHello;

  root.appendChild(div);

  const input = document.createElement('input');
  input.onclick = sayHello;

  root.appendChild(input);

  const p = document.createElement('p');
  p.innerText = '<3 mif';
  p.onclick = sayHello;

  root.appendChild(p);
}

function sayHello(event) {
  console.log('Hello,'+event.target.localName);
}