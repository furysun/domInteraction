export function task8() {
  const root = document.getElementById('task8');

  const divGreen = createDiv('parent', '200px', '200px', 'green');
  divGreen.onclick = () => changeColor(divGreen, 'red', 'green');
  root.appendChild(divGreen);

  const divPink = createDiv('child', '100px', '100px', 'pink');
  divPink.onclick = (event) => {
    changeColor(divPink, 'crimson', 'pink');
    event.stopPropagation();
  }
  divGreen.appendChild(divPink);

  const divBlue = createDiv('g.child', '50px', '50px', 'blue');
  divBlue.onclick = (event) => {
    changeColor(divBlue, 'purple', 'blue');
    event.stopPropagation();
  }
  divPink.appendChild(divBlue);
}

function changeColor(element, color1, color2) {
  element.style.backgroundColor = element.style.backgroundColor === color1 ? color2 : color1;
}

function createDiv(text, width, height, color) {
  const div = document.createElement('div');
  div.innerText = text;
  div.style.width = width;
  div.style.height = height;
  div.style.backgroundColor = color;

  return div;
}