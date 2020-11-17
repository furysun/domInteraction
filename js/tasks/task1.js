export function task1() {
  const span = document.getElementById('task1_id');
  console.log(span.innerText);

  const input = document.getElementById('task1_input');
  console.log(input.value);

  const checkbox = document.getElementById('checkbox_one');
  console.log(checkbox.checked);

  const inputs = document.getElementsByTagName('input');
  console.log(inputs.length);
  console.log(inputs);

  const taskTitles = document.getElementsByClassName('task-title');
  console.log(taskTitles[0].innerHTML);

  const input2 = document.querySelector(".cat .dog input[name='input2']");
  console.log(input2.value);
}