let elements;
const js = 'boring';
let variable = true

// if (js === 'amazing') {
//   alert('It has lots of fun')
// }
// else
// {
//   alert('It is boring');
// }

function Click() {


  if (variable) {
    elements = document.getElementsByTagName('h1')
    elements[0].innerHTML = 'Interesting';
    variable = false
  }
  else {
    elements = document.getElementsByTagName('h1')
    elements[0].innerHTML = 'Boring';
    variable = true
  }





}