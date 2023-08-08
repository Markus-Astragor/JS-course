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
