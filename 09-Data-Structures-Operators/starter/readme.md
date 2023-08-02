## Destructuring Array

const array = [1, 2, 3];

const [a, b, c] = array;

console.log(a, b, c);

## Destructuring Objects

Basic destructuring is:

const openingHours = {
thu: {
open: 12,
close: 22,
},
fri: {
open: 11,
close: 23,
},
sat: {
open: 0, // Open 24 hours
close: 24,
},
},

const {thu, fri, sat} = openingHours;

if we want to give our own name variables when we destructure objects we can do like this

const {thu: thursday, fri: friday, sat: saturday} = openingHours;

if we don't exactly know which data will be we can put its variable in object and assign it to empty array
here is an example

const { thu: thursday, fri: friday, sat: saturday, sun = [] } = openingHours;
here we don't have the sun field in openingHours object

if we want to destructure some variables which are already exist we can use ();

Example:
let a = 999;
let b = 111;

const obj = {a: 11, b: 23};
({a, b} = obj)

## Spread Operator

to extend your existing array we can use spread operator
const arr = [1,3,2];

const array = [...arr, 10, 15, 20];

Iterables: arrays, strings, maps, sets but not objects;
It is expected to use when we pass arguments into a function or when we build new array
