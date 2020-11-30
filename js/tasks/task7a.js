export function task7() {
  function clickParent() {
    console.log('click Parent')
  }

  function clickChild() {
    console.log('click Child');
  }

  function clickGrandChild(event) {
    console.log('click Grand Child');
  }

  document.getElementById('one').onclick = clickParent;
  document.getElementById('two').onclick = clickChild;
  document.getElementById('three').onclick = clickGrandChild;
}

