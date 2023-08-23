'use strict';


// Constructor Functions and the new Operator

// We build an object using a constructor function

// constructor function is just a normal function but with the difference that we call it with new operator



// --------------------------------------
// 1. new empty object is created
// 2. function is called, this = {}
// 3. this object is linked to a prototype
// 4. function automatically return that empty object {}
// --------------------------------------
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
  // this.calcAge = function () {
  //   console.log(new Date().getFullYear() - this.birthYear);
  // } // don't do this
}

const jonas = new Person('Jonas', 1991);
console.log('jonas', jonas);

const matilda = new Person('Matilda', 1999);
const jack = new Person('Jack Sparrow', 1976);

console.log(jonas instanceof Person) // true if jonas object is actually the item of class Person


// Prototypes

// this constructor function will get access to all of these properties 
// basic prototype inheritance
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear)
} // objects can reuse this method and it positively impacts on performance because this method is not in object itself


jonas.calcAge();

console.log('jonas proto', jonas.__proto__); // we can check the prototypes jonas proto ​
// calcAge: function calcAge()
// constructor: function Person(name, birthYear)​
// <prototype>: Object { … }

console.log(jonas.__proto__ === Person.prototype); // true

console.log('check if prototype', Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo sapience';
console.log(jonas.species, matilda.species);
console.log('hasOwnProperty', jonas.hasOwnProperty('name')); // check if exists field with the name 'name' true



// Prototypal Inheritance and The Prototype Chain
// Object.prototype top of the chain
console.log('jonas', jonas.__proto__.__proto__);
console.log('top of the chain', jonas.__proto__.__proto__.__proto__);

// if we look for example on arrays they don't contain these methods they inherit them
// Here is an example

const arr = [1, 2, 3];
console.log('array`s prototype', arr.__proto__); // prototype is a mechanism in order to reuse the code

// Coding challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10
  console.log(this.speed);
}

Car.prototype.brake = function () {
  this.speed = this.speed - 5
  console.log(this.speed);
}

const carObj1 = new Car('BMW', 120);
const carObj2 = new Car('Mercedes', 95)

carObj1.accelerate(); // 130
carObj2.accelerate(); // 105

carObj1.brake();// 125
carObj2.brake();// 100