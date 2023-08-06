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
