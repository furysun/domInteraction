export function task2() {
  const root = document.getElementById('root');

  root.innerHTML = `
    <div id="task2_div_with_span">
      <span>cat+dog2</span>
    </div>

    <div id="task2_div_with_text">
      i<3u
    </div>

    <div class="task2-red">
      mif
    </div>
    <input id="task2_input" value="noooo"/>

    <div id="task2_div_style" style="background-color: antiquewhite">
      meow
    </div>
  `;

  let div = document.getElementById('task2_div_with_span');
  div.innerHTML = '<p><3</p>';

  let div2 = document.getElementById('task2_div_with_text');
  div2.innerText = "i'm a cat";

  let divs = document.getElementsByClassName('task2-red');
  divs[0].className = 'task2-pink';

  let input2 = document.getElementById('task2_input');
  input2.value = 'Yeees';

  let div3 = document.getElementById('task2_div_style');
  div3.style.backgroundColor = 'red';
}