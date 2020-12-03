export function task12() {
  const root = document.getElementById('root');

  root.innerHTML = `
    <div id="to_remove"> <3 </div>
    <div> ^^ </div>
  `;

  const toRemove = document.getElementById('to_remove');
  root.removeChild(toRemove);
}

