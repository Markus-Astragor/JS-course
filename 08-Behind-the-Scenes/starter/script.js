'use strict';

// Primitives vs Objects

// const Marko = {
//   name: 'Marko',
//   age: 18
// }

// const Sara = Marko;
// Sara.age = 17

// console.log('Sara', Sara);
// console.log('Marko', Marko);

// Experiment

let myObject = {
  name: 'Olena'
} // pojnts to 003 which points to D30F  {name}

const newMarko = myObject;
newMarko.name = 'Marko'

myObject = 10

console.log('myObject', myObject); // --> 10 we point to new cell memory + primitive
console.log('newMarko', newMarko); // --> object with name Marko