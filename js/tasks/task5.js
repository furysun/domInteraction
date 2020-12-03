export function task5() {
  const root = document.getElementById('root');
  root.innerHTML =`
    <div id="remove-me">
      <p> =(^.^)= </p>
    </div>
    <ul id="ul">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
    </ul>
  `;


  let del = document.getElementById('remove-me');
  let parent = del.parentNode;

  parent.removeChild(del);

  const ul = document.getElementById('ul');
  const lis = ul.children;

  for (let i = 0; i < lis.length; i++) {
    let li = lis[i];
    console.log(li);

    if (li.innerText % 2 === 0) {
      ul.removeChild(li);
    }
  }
}