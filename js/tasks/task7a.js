export function task7() {
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="one" id="one">
      parent
      <div class="two" id="two">
        child
        <div class="three" id="three">
          g.child
        </div>
      </div>
    </div>
  `;

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

