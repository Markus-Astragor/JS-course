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
// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
//   // this.calcAge = function () {
//   //   console.log(new Date().getFullYear() - this.birthYear);
//   // } // don't do this
// }



// console.log(jonas instanceof Person) // true if jonas object is actually the item of class Person


// Prototypes

// this constructor function will get access to all of these properties 
// basic prototype inheritance
// Person.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthYear)
// } // objects can reuse this method and it positively impacts on performance because this method is not in object itself


// jonas.calcAge();

// console.log('jonas proto', jonas.__proto__); // we can check the prototypes jonas proto ​
// // calcAge: function calcAge()
// // constructor: function Person(name, birthYear)​
// // <prototype>: Object { … }

// console.log(jonas.__proto__ === Person.prototype); // true

// console.log('check if prototype', Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'Homo sapience';
// console.log(jonas.species, matilda.species);
// console.log('hasOwnProperty', jonas.hasOwnProperty('name')); // check if exists field with the name 'name' true



// Prototypal Inheritance and The Prototype Chain
// Object.prototype top of the chain
// console.log('jonas', jonas.__proto__.__proto__);
// console.log('top of the chain', jonas.__proto__.__proto__.__proto__);

// if we look for example on arrays they don't contain these methods they inherit them
// Here is an example

const arr = [1, 2, 3];
console.log('array`s prototype', arr.__proto__); // prototype is a mechanism in order to reuse the code

// Coding challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed
}

Car.prototype.accelerate = function (car, charge) {
  this.speed = this.speed + 10
  console.log(`${car} goind at ${this.speed} km/h ${charge ? 'with a' + charge + '%' : ''}`);
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

// coding challenge 3

const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

ElectricCar.prototype.chargeTo = function (chargeTo) {
  return this.charge = chargeTo;
}

ElectricCar.prototype = Object.create(Car.prototype);

const tesla = new ElectricCar('Tesla', 120, 22);
tesla.accelerate('Tesla', 22);


// ES6 Classes

// class expression
// const PersonCL = class {

// }

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods

  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }


  // setting property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`The name ${name} you provided is not valid becuase it is not full`);
  }

  get fullName() {
    return this._fullName; // just replace _fullName to fullName 
  }

  // static methods

  static hey() {
    console.log('Hey');
  }
}


const jessica = new PersonCl('Jessica Davis', 2004);
console.log('jessica', jessica);

const jessicasAge = jessica.calcAge();

console.log('jessicasAge', jessicasAge);

// Setters and Getters

const account = {
  name: 'Oleg',
  movements: [200, 530, 40, 120],

  get latest() {
    return this.movements[this.movements.length - 1];
  },

  set latest(mov) {
    this.movements.push(mov);
  }
}

account.latest = 60;

console.log(account.movements);

console.log(jessica.age);

console.log('Array', Array);

PersonCl.hey();

// Object.create

const PersonProto = {
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const Steven = Object.create(PersonProto);

console.log('Steven', Steven);


Steven.init('Steven', 1990);
const stevensAge = Steven.calcAge();

console.log('stevensAge', stevensAge);


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 10
    return this.speed
  }

  brake() {
    this.speed = this.speed - 5;
    return this.speed;
  }

  get speedUS() {
    return this.speed / 1.6
  }

  set speedUS(speed) {
    return this.speed = speed * 1.6;
  }

}



const ford = new CarCl('Ford', 120);

console.log(ford.accelerate()); // 130
console.log(ford.brake()); // 125

console.log(ford.speedUS); // 125 / 1.6


//  Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear
}

const jonas = new Person('Jonas', 1991);

const matilda = new Person('Matilda', 1999);
const jack = new Person('Jack Sparrow', 1976);


const Student = function (firstName, birthYear, course) {  // pass the same arguments but with additional ones
  Person.call(this, firstName, birthYear);
  this.course = course;
}


// we should write it before methods becuase Object.create overwrites field prototype
// Student.prototype = Person.prototype; // wrong variant
Student.prototype = Object.create(Person.prototype) // correct variant



Student.prototype.introduce = function () {
  return `My name is ${this.firstName} and study at ${this.course}`
}


const marko = new Student('Markuss', 2004, 'Computer Science');

console.log(marko.introduce());



console.log(marko.calcAge());


console.log(marko instanceof Person);
console.log(marko instanceof Student);

Student.prototype.constructor = Student;