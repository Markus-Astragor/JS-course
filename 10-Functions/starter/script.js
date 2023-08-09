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


// coding challenge 1

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const promptResult = prompt(`What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++`)
    const promptResultNumber = Number(promptResult);
    if (promptResultNumber >= 4 || promptResultNumber < -1) {
      console.log(`Try another number you can choose between 0, 1, 2, or 3`);
      return
    } else {
      this.answers[promptResultNumber]++;
      this.displayResults(this.answers, 'string')
    }

  },
  displayResults(data, type) {
    if (type === 'array') {
      console.log('data', data);
    } else if (type === 'string') {
      console.log('Poll results are', ...data);
    } else {
      console.log('Not allowable type');
    }
  }
}


// bonus
const displayMethod = poll.displayResults;
displayMethod.call(poll, [5, 2, 3], 'array');
displayMethod.call(poll, [1, 5, 3, 9, 6, 1], 'array');

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// Immediately invoked function expression

// An example of ordinary function

(function () {
  console.log(`It won't show again`);
})();


(() => {
  console.log('This also won`t show again');
})();


// Closures
const secureBooker = () => {
  let bookerCount = 0;

  return () => {
    bookerCount++;
    console.log(`${bookerCount} passengers`);
  }
}

const secureBookerResult = secureBooker();
secureBookerResult();
secureBookerResult();

// More examples about closure

let f;

const g = () => {
  const a = 23;
  f = () => {
    console.log(a * 2);
  }
}

const h = () => {
  const b = 77;
  f = () => {
    console.log(b * 2);
  }
}

g();
f(); // 46
h();
f(); // 154


// In this case when function calls it sees its scope first of all and then if it doesn't it looks into outer scope
const perGroup = 20

const boardPassengers = (n, wait) => {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are boarding ${n} passengers here are ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
}


boardPassengers(12, 2);

// coding challenge 2



(function () {
  const buyBtn = document.querySelector('.buy');
  const changeBtnColor = () => {
    buyBtn.style.backgroundColor = 'blue'
  }
  buyBtn.addEventListener('click', changeBtnColor)
})();



