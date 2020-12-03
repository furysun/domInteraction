export function task11() {
  const root = document.getElementById('root');

  const input = document.createElement('input');
  // input.onchange = sayMif;
  input.oninput = sayMif;
  root.appendChild(input);

  const div = createDiv('50px', '50px', 'red');
  const div1 = createDiv('50px', '50px', 'white');
  const div3 = createDiv('50px', '50px', 'red');

  root.appendChild(div);
  root.appendChild(div1);
  root.appendChild(div3);
}

function sayMif(event) {
  // console.log(  event.target.value);
  event.target.value = event.target.value.replace('a', '<3');
}

function mouseOver(event) {
  console.log('over');
  event.target.style.backgroundColor = 'blue';
}

function mouseOut(event, color) {
  console.log('out');
  event.target.style.backgroundColor = color;
}

function createDiv(width, height, color) {
  const div = document.createElement('div')
  div.style.width = width;
  div.style.height = height;
  div.style.backgroundColor = color;

  div.onmouseover = mouseOver;
  div.onmouseout = (event)=> mouseOut(event, color);

  return div;
}