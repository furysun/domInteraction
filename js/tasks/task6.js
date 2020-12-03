export function task6() {
  // 1
  // document.getElementById('button_ok').addEventListener("click", alertOk);

  // 2
  // document.getElementById('button_ok').onclick = alertOk;

  // 3
  const root= document.getElementById('root');
  root.innerHTML = `<button id="button_ok" onclick="alertOk()">ok</button>`;

  window.alertOk = alertOk;
}

function alertOk() {
  alert('ok!');
}