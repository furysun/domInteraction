export function task5() {
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