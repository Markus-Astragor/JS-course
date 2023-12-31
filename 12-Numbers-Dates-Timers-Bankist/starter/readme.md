## Converting and Checking Numbers

console.log(23 === 23.0) // true
console.log(+'23') // converting string '23' to 23
console.log(parseInt('23edfsfs')); // output 23
console.log(parseFloat('23.5rem')); // output 23.5

// check only if it is not a number
console.log(isNaN(23)); // output false because 23 is number
console.log(isNaN(+'23X')); // output true because X is not a number if we parse it will 23 but not in this case

//the best way to checck if it is number or not
console.log('isFinite(23)', isFinite(23)); // true

// Math and Rounding

// Math max method and min

console.log(Math.max(1, 10, 17, 23));
console.log(Math.max(1, 10, 17, '23'));

//Math.PI

console.log(Math.PI \* Number.parseFloat('10px') \*\* 2); // without '\'

//Math.trunc

console.log(Math.trunc(23.3333)); // removes decimal part

//Math.round

console.log(Math.round(23.5)) // ---> 24

// Math.floor
Підлога
console.log(Math.floor(24.5)); // 24

// toFixed()
console.log(+(20.345).toFixed(2)); // 20.34

## The Remainder Operator

console.log(20 % 2) // 0 because the result of division is 10

## Numeric Separators

// it doesn't work with strings
const diameterSolarSystem = 287_460_000_000;

console.log(Number('23_000')); // NaN

## Working with BigInt

ES2020 was added BIGInt
it can't mix big ints with usual numbers

const myBigInt = 1000000000000000000000000000000000000000000000000n
const regNum = 23;
console.log(myBigInt \* regNum); // Uncaught TypeError: can't convert BigInt to number

// we can't do math operations on bigInts

console.log(Math.sqrt(myBigInt)); // Uncaught TypeError: can't convert BigInt to number

// in divisions it cuts off decimal part
console.log(11n / 3n); // 3n

## Creating Dates

## Internationalizing Dates (Intl)

 const optionsDate = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }
  const now = new Date();
  labelDate.textContent = new Intl.DateTimeFormat('uk', optionsDate).format(now);

//http://www.lingoes.net/en/translator/langcode.htm table codes

## Internationalizing Numbers (Intl)
const formatCur = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value)
}

formatCur(1000, 'uk', 'UAH') //  1 000,00 ₴

## Timers: setTimeout and setInterval

We specify when we exactly want to call this callBack function setTimeout first argument is a function and the second one is the time
setTimeout(() => console.log('It will be called after two seconds'), 2000);

if you need to pass arguments into this function you can write the after argument about time here is an example: 
setTimeout((ing1, ing2) => console.log(`It will be called after two seconds ${ing1} and ${ing2}`), 2000, 'olives', 'cheese');


Moreover, we can cancel this function to execute before the time elapsed:

Here is an example:
----
const ingredients = ['olives', 'cheese'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`It will be called after two seconds ${ing1} and ${ing2}`), 2000, ...ingredients);

if (ingredients.includes('cheese')) clearTimeout(pizzaTimer); // it just cancels timer and don't execute this line of code
----

--- 
interval it will repeat every x seconds which you pass as arument here is an example of clock:

setInterval(() => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();
  console.log(`${currentHour}:${currentMinutes}:${currentSeconds}`);
}, 1000);

---