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
