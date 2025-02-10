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
  name: 'Olena',
}; // pojnts to 003 which points to D30F  {name}

const newMarko = myObject;
newMarko.name = 'Marko';

myObject = 10;

console.log('myObject', myObject); // --> 10 we point to new cell memory + primitive
console.log('newMarko', newMarko); // --> object with name Marko

const someFunction = () => {
  console.log(this);
};

someFunction();

// this points to an object which calls the method
const object = {
  firstName: 'Marko',
  greet: function (a, b) {
    let sum = 0;
    [...arguments].forEach(num => {
      console.log('num', num);
    });

    console.log('sum', sum);

    console.log(`Hey ${this.firstName}`);

    const testSomeValue = () => {
      console.log(this.firstName);
    };

    testSomeValue();
  },
};

const arr = [10, 15, 20];

object.greet(...arr);

var a = 11;
function testValue() {}
testValue();

console.log(this);

const c = Symbol('a');
const d = Symbol('a');

console.log(c == d);

console.log(typeof undefined);
