export function task3() {
  let rootDiv = document.getElementById('task3_div');

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

  let thName = document.createElement('th');
  thName.innerText = 'name';
  tr.appendChild(thName);

  let thColor = document.createElement('th');
  thColor.innerText = 'color';
  tr.appendChild(thColor);

  let thSize = document.createElement('th');
  thSize.innerText = 'size';
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
  const td = document.createElement('td');
  td.innerText = value;
  return td;
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