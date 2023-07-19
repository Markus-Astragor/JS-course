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

console.log('test', adventurer.dog?.name);

console.log(2 ** 5);

console.log('strings', '23' % '10')


//----------------------------------------Falsy Values --------------------------------------------------
console.log(Boolean('false'));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean({}));



//-----------------------------------------------------------------Switch statement----------------------------------------------------
let day = 'saturdy';

switch (day) {
  case 'monday':
  case 'tuesday':
    console.log('learn frontend and write cv');
    break
  case 'wednesday':
    console.log('learn js in order to know react better');
    break
  case 'thursday':
    console.log('think about your hard and soft skills');
    break
  case 'friday':
    console.log('watch course and code more');
    break
  case 'saturday':
  case 'sunday':
    console.log(
      'relax'
    );
    break

    default: console.log('Invalid day nazik is great');
}


