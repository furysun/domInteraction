export function task4() {
  let task4 = document.getElementById('task4');

  for (let i = 0; i < 10; i++) {
    let img = document.createElement('img');
    img.style.width = '100px';
    img.src = '../img/1.jpg';
    task4.appendChild(img);
  }

  let cats = [1, 2, 3, 4, 5, 6, 7];
  for (let i = 0; i < cats.length; i++) {
    cats[i] = 3;
  }
  console.log(cats);
}