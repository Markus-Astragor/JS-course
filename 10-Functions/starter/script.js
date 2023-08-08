'use strict';


// Default parameters
// We can put different expressions into functions as arguments

const bookings = [];

const calcFlight = (flightNum, numPassengers = 10, price = numPassengers >= 20 ? 200 * numPassengers : 400 * numPassengers) => {
  const booking = {
    flightNum,
    numPassengers,
    price
  }

  console.log('booking', booking);
}


calcFlight('Fa2025', 20);




// Functions Accepting Callback Functions

const upCase = (str) => {
  return str.toUpperCase();
}

const lowCase = (str) => {
  return str.toLowerCase();
}


const wordProcedure = (str, fn) => {
  str.toLowerCase();
  const [splittedFirstWord, ...others] = str.split(' ');
  const firstWordChanged = fn(splittedFirstWord);
  return [firstWordChanged, ...others].join(' ');

}

const oneWordLowCase = (str) => {
  wordProcedure(str, lowCase);
}

const oneWordUpperCase = str => {
  return wordProcedure(str, upCase);
}

const result = oneWordUpperCase('javascript is Amazing');

console.log('result', result);

// Functions Returning Functions

// first option to write arrow function that returns another arrow function  
const greet = greet => {
  return (name) => {
    console.log(`${greet} ${name}`);
  }
}


const greetHey = greet('Hey Master of C#');
greetHey('Nazlo');

// second variant to write such a function

const greet2 = greet => name => {
  console.log(`${greet} ${name}`);
}

greet2('Hey Master of ASP.NET')('Nazikk');


// The call and apply Methods

const lufthansa = {
  name: 'Lufthansa',
  iataCode: '21BB',
  bookings: [],
  book(flightNum, person) {
    return this.bookings.push(`${person} booked a seat on ${this.name} flight ${flightNum}`)
  }
}

const euroWings = {
  name: 'euroWings',
  iataCode: '2233B',
  bookings: []
}

const bookMethod = lufthansa.book;

bookMethod.call(lufthansa, 23, 'Sara');
console.log('lufthansa', lufthansa);


bookMethod.apply(euroWings, [29, 'Nazlo']);
console.log('euroWings', euroWings);

const bookLufthansa = bookMethod.bind(lufthansa);
bookLufthansa(449, 'Sarochkaa');


const bookNumber = bookMethod.bind(lufthansa, 2899);
bookNumber('Nazlooo');
bookNumber('Olenaas');

console.log('lufthansa', lufthansa);

lufthansa.planes = 300;
lufthansa.buyNewPlane = function () {
  console.log(this);
  this.planes++
  console.log(this.planes);
}


// document.querySelector('.buy').addEventListener('click', lufthansa.buyNewPlane.bind(lufthansa));

// basic function reusing them

const addTax = (tax) => (rate = 0.23) => tax + tax * rate;

// const addUkraine = addTax.bind(null, 0.2);

// const ukraineResult = addUkraine(100);

// console.log('ukraineResult', ukraineResult);

const addUkraine2 = addTax(100)(0.23);


console.log('resultUkraine', addUkraine2);