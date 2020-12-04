const cellCount = 30;
let catPosition = 3;
let root = null;

export function task14() {
  root = document.getElementById('root');
  document.onkeydown = changeFaceCat;
  render();
}

function render() {
  const fieldPrev = document.getElementById('field');

  if (fieldPrev != null) {
    fieldPrev.remove();
  }

  const field = document.createElement('div');
  field.setAttribute('id', 'field');
  field.style.display = 'flex';
  root.appendChild(field);

  for (let i = 0; i < cellCount; i++) {
    if (i === catPosition) {
      const div = createDiv();
      div.style.backgroundImage = "url('../img/1.jpg')";
      div.style.backgroundSize = '100%';
      field.appendChild(div);
    } else {
      const div = createDiv();
      field.appendChild(div);
    }
  }
}

function createDiv() {
  const div = document.createElement('div');
  div.style.height = '50px';
  div.style.width = '50px';
  div.style.border = 'black solid 1px';
  return div;
}

function changeFaceCat(e) {
  switch (e.key) {
    case "ArrowLeft":
      console.log('left');
      catPosition--;
      render();
      break;
    case "ArrowRight":

      console.log('r');
      catPosition++;
      render();
      break;
  }
}
