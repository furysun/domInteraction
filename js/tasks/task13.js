export function task13() {
  const root = document.getElementById('root');

  root.innerHTML = `<div id="cat">^^</div>`;
  const cat = document.getElementById('cat');

  document.onkeydown = changeFaceCat;

}

function changeFaceCat(e) {
  switch (e.key) {
    case "ArrowLeft":
      cat.innerText = '=^^=';
      break;
    case "ArrowRight":
      cat.innerText = '=^*^=';
      break;
    case "ArrowUp":
      cat.innerText = '=(^_^)=';
      break;
    case "ArrowDown":
      cat.innerText = '<3';
      break;
  }
}
