let elements;
const js = 'boring';
let variable = true



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


const adventurer = {
  cat: {
    name: 'Nazik'
  }
}

console.log('test' ,adventurer.dog?.name);

console.log(2 ** 5);

console.log('strings' ,'23' % '10')