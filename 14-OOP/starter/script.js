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


// ES6 Classes

// class expression
// const PersonCL = class {

// }

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods

//   calcAge() {
//     return new Date().getFullYear() - this.birthYear;
//   }

//   get age() {
//     return new Date().getFullYear() - this.birthYear;
//   }


//   // setting property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else console.log(`The name ${name} you provided is not valid becuase it is not full`);
//   }

//   get fullName() {
//     return this._fullName; // just replace _fullName to fullName 
//   }

//   // static methods

//   static hey() {
//     console.log('Hey');
//   }
// }


// const jessica = new PersonCl('Jessica Davis', 2004);
// console.log('jessica', jessica);

// const jessicasAge = jessica.calcAge();

// console.log('jessicasAge', jessicasAge);

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

// console.log(jessica.age);

console.log('Array', Array);

// PersonCl.hey();

// Object.create

// const PersonProto = {
//   calcAge() {
//     return new Date().getFullYear() - this.birthYear;
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }

// const Steven = Object.create(PersonProto);

// console.log('Steven', Steven);


// Steven.init('Steven', 1990);
// const stevensAge = Steven.calcAge();

// console.log('stevensAge', stevensAge);


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


// Coding challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
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


ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeTo = function (chargeTo) {
  this.charge = chargeTo;
  console.log(this.charge);
}

ElectricCar.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge = this.charge - 1;
  console.log(`${this.make} goind at ${this.speed} km/h ${'with a ' + this.charge + '%'}`);
} // polymorphism

const tesla = new ElectricCar('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeTo(90)

// coding challenge 4

class EVCL extends CarCl {
  // Private charge
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
  }

  brake() {
    this.speed -= 5;
    return this
  }
}

const pashaTesla = new EVCL('Tesla', 120, 23);
pashaTesla.accelerate();
pashaTesla.accelerate();
pashaTesla.accelerate();
pashaTesla.brake();

console.log(pashaTesla.chargeBattery(90));
//  Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//   return new Date().getFullYear() - this.birthYear
// }

// const jonas = new Person('Jonas', 1991);

// const matilda = new Person('Matilda', 1999);
// const jack = new Person('Jack Sparrow', 1976);


// const Student = function (firstName, birthYear, course) {  // pass the same arguments but with additional ones
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// }


// // we should write it before methods becuase Object.create overwrites field prototype
// // Student.prototype = Person.prototype; // wrong variant
// Student.prototype = Object.create(Person.prototype) // correct variant



// Student.prototype.introduce = function () {
//   return `My name is ${this.firstName} and study at ${this.course}`
// }


// const marko = new Student('Markuss', 2004, 'Computer Science');

// console.log(marko.introduce());



// console.log(marko.calcAge());


// console.log(marko instanceof Person);
// console.log(marko instanceof Student);

// Student.prototype.constructor = Student;




// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods

//   calcAge() {
//     return new Date().getFullYear() - this.birthYear;
//   }

//   get age() {
//     return new Date().getFullYear() - this.birthYear;
//   }


//   // setting property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else console.log(`The name ${name} you provided is not valid becuase it is not full`);
//   }

//   get fullName() {
//     return this._fullName; // just replace _fullName to fullName 
//   }

//   // static methods

//   static hey() {
//     console.log('Hey');
//   }
// }


// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // always needs to happen first in order to have the this keyword
//     super(fullName, birthYear);
//     this.course = course
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and i am studying at ${this.course}`);
//   }

//   calcAge() {
//     return 2037 - this.birthYear;
//   }
// }

// const anzhelika = new StudentCl('Anzhelika Chorna', 2003, 'Computer Science');
// anzhelika.introduce()

// console.log('anzhelika', anzhelika);
// console.log(anzhelika.calcAge());

// Inheritance Between "Classes": Object.create

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

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course;
}

const jay = Object.create(StudentProto);
jay.init('Jay Stedhem', 2004, 'Actor');


class Account {
  //1. Public field
  locale = navigator.language;


  //2. Private fields
  #movements = []; // # in order to make them private
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening account, ${owner}`);
  }

  // Public interface
  //3. Public methods
  getMovements() {
    return this.#movements
  }

  deposit(sum) {
    this.#movements.push(sum);
    return this;
  }

  withdrawal(sum) {
    this.#movements.push(-sum);
    return this;
  }

  // 4. Private methods
  #approveLoan() {
    return true
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(200);
acc1.withdrawal(2000);

//console.log(acc1.#movements); // Uncaught SyntaxError: reference to undeclared private field or method #movements
//console.log(acc1.#approveLoan()); // Property '#approveLoan' is not accessible outside class 'Account' because it has a private identifier.

// Chaining Methods
acc1.deposit(500).deposit(1000).withdrawal(200);
console.log(acc1.getMovements());