export function task3() {
  const root = document.getElementById('root');
  root.innerHTML = `
    <div id="task3_div">
    </div>
  
    <div id="task4">
    </div>
   `;

  let rootDiv = document.getElementById('task3_div');
  console.log(rootDiv);

  let h = createH();
  rootDiv.appendChild(h);

  let button = createButton();
  rootDiv.appendChild(button);

  const cats = [
    {name: 'nona', color: 'red', size: 3},
    {name: 'nna', color: 'rd', size: 2},
    {name: 'noa', color: 'red', size: 3},
  ];

  let table = createTable(cats);
  console.log(table);
  rootDiv.appendChild(table);
}

function createH() {
  let h = document.createElement('h1');
  h.innerText = '<3';

  return h;
}

function createButton() {
  let button = document.createElement('button');
  button.innerText = 'ok';

  return button;
}

function createTableHead() {
  const thead = document.createElement('thead');

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  const thName = createElement('th', 'name');
  tr.appendChild(thName);

  const thColor = createElement('th', 'color');
  tr.appendChild(thColor);

  const thSize = createElement('th', 'size');
  tr.appendChild(thSize);

  return thead;
}

function createTbody(cats) {
  const tBody = document.createElement('tbody');

  for (let i = 0; i < cats.length; i++) {
    const tr = createTr(cats[i].name, cats[i].color, cats[i].size);
    tBody.appendChild(tr);
  }

  return tBody;
}

function createTd(value) {
  return createElement('td', value);
}

function createElement(tagName, value) {
  const element = document.createElement(tagName);
  element.innerText = value;

  return element;
}

function createTr(name, color, size) {
  const tr = document.createElement('tr');

  let tdName = createTd(name);
  tr.appendChild(tdName);

  let tdColor = createTd(color);
  tr.appendChild(tdColor);

  let tdSize = createTd(size);
  tr.appendChild(tdSize);

  return tr;
}

function createTable(cats) {
  let table = document.createElement('table');
  table.style.border = 'black solid 1px';

  const thead = createTableHead();
  table.appendChild(thead);

  const tbody = createTbody(cats);
  table.appendChild(tbody);

  return table;
}