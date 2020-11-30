export function task6() {
  // 1
  // document.getElementById('button_ok').addEventListener("click", alertOk);

  // 2
  // document.getElementById('button_ok').onclick = alertOk;

  // 3
  window.alertOk = alertOk;
}

function alertOk() {
  alert('ok!');
}