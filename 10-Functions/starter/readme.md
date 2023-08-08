## Default Parameters

We can pass expressions into function parameters and default values here you can see an example:

const bookings = [];

const calcFlight = (flightNum, numPassengers = 10, price = numPassengers >= 20 ? 200 _ numPassengers : 400 _ numPassengers) => {
const booking = {
flightNum,
numPassengers,
price
}

console.log('booking', booking);
}

calcFlight('Fa2025', 20)

## How Passing Arguments Works: Value vs. Reference

All parameters in function are just copy here is an explanation:

const age = 18

const checkIn = (myAge) => {
myAge = 19;
}
checkIn(age)

console.log(age) ----> 18 because myAge variable is not actually variable age it is its copy we don't change age directly

## First-Class and Higher-Order Functions

JavaScript treats functions as first-class citizents
This means that functions are simply values
Functions are just another 'type' of object

it gives us such privileges:

1. store functions in a variable
   Example: const add = () => a + b;
   const counter = {
   value: 25,
   inc: function () {
   this.value++;
   }
   }

2. Passing functions as arguments:
   const greet = () => console.log('Greetings');
   btnClose.addEventListener('click', greet)
3. Return functions from functions:
   function count() {
   let counter = 0;

   return function () {
   counter++;
   }
   }

4. Call methods on functions:
   Example:
   counter.inc.bind(someOtherObject);

Higher-order function:
A function that receives another function as an argument that returns a new function or both
This is only possible because of first-class functions

CallBack function is a function which will be called later

## Functions Accepting Callback Functions

Here is an example:
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

Functions can have methods such as name property: fn.name;

## Functions Returning Functions

Here is an example:

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

## The call and apply Methods

Call, bind and apply methods in order to make js undestand that we need a specific object

Call method looks if we have a method on object and if there is used this keyword we can use call method because if we don't we can't read properties of current objects here is an example:

if we want to call call method it is looks like:

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

bookMethod.call(lufthansa, 23, 'Sara'); ---> here we give the name of object as first argument in order to call this object
console.log('lufthansa', lufthansa);

Apply method is similar but the it takes as an argument an array. Here is an example:

bookMethod.apply(euroWings, [29, 'Nazlo']);
console.log('euroWings', euroWings);

Bind method uses in order to use returned function after you called it here is an example:
We can also define default values here in bind method here is an example:

const bookNumber = bookMethod.bind(lufthansa, 2899);
bookNumber('Nazlooo');
bookNumber('Olenaas');

console.log('lufthansa', lufthansa);
