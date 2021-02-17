const people = [
  {
    id: 112,
    firstName: "Tod",
    secondName: "Hovard"
  },
  {
    id: 3,
    firstName: "mark",
    secondName: "twitch"
  },
  {
    id: 4,
    firstName: "rk",
    secondName: "witch"
  },
  {
    id: 7,
    firstName: "mrk",
    secondName: "tch"
  },
];

const root = document.getElementById('root');

export function task16() {
  console.log('task16');

  const idDiv = document.createElement('div');
  idDiv.innerText = people[0].id;
  idDiv.onclick = changeColor;
  root.appendChild(idDiv);


  const firstNameDiv = document.createElement('div');
  firstNameDiv.innerText = people[0].firstName;
  firstNameDiv.onclick = changeColor;
  root.appendChild(firstNameDiv);

  const secondNameDiv = document.createElement('div');
  secondNameDiv.innerText = people[0].secondName;
  secondNameDiv.onclick = changeColor;
  root.appendChild(secondNameDiv);

  const buttonMif = document.createElement('button');
  buttonMif.innerText = 'ok';
  buttonMif.onclick = sayMif;
  root.appendChild(buttonMif);

  creatTable();

}

function creatTable() {
  const table = document.createElement('table');
  root.appendChild(table);

  const thId = document.createElement('th');
  thId.innerText = 'id';
  table.appendChild(thId);

  const thName = document.createElement('th');
  thName.innerText = 'name';
  table.appendChild(thName);

  const thSecondName = document.createElement('th');
  thSecondName.innerText = 'second name';
  table.appendChild(thSecondName);

  for (let i = 0; i < people.length; i++) {
    const tr = drawTr(people[i].id, people[i].firstName, people[i].secondName);
    table.appendChild(tr);
  }

  // people.forEach((person)=>{
  //   const tr = drawTr(person.id, person.firstName, person.secondName);
  //   table.appendChild(tr);
  // })
}

function drawTr(id, firstName, secondName) {
  const tr = document.createElement('tr');

  const tdId = document.createElement('td');
  tdId.innerText = id;
  tr.appendChild(tdId);

  const tdName = document.createElement('td');
  tdName.innerText = firstName;
  tr.appendChild(tdName);

  const tdSecondName = document.createElement('td');
  tdSecondName.innerText = secondName;
  tr.appendChild(tdSecondName);

  return tr;
}

function changeColor(e) {
  e.target.style.color = 'red';
}

function sayMif() {
  alert('mif');
}