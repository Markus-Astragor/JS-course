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

## Short circuiting

They use any data type they can return any data type, short-circuiting

Example console.log(3 || 'Jonas') --> 3

How does it work? if first value is truthy value it will return immediately this value.

This:

const guests = restaurant.guests || 10; //---> it means that if we don't have any truthy value in restaurant.guests js will automatically assign 10 to guests variable;

is equal

to this:

const guests = restaurant.guests ? restaurant.guests : 10;

## The nullish coascelling operator

Introduced in ES2020

Nullish values: null and undefined (not 0 or '');

const guestsCorrect = restaurant.guests ?? 10;

## Logical assignment operators

Introduced in ES2021

const rest1= {
name: 'Markoo',
owner: 'Markusik'
}

rest1.numGuests ||= 20

we can also write like this:

rest1.numGuests ??= 10;

rest1.owner &&= '<Anonymous>'

## Looping arrays the for-of loop

we type for(const item of items) console.log(item);

it si simpler to use this for-of loop

if we need index we can type like this for(const item of items.entries()){ } ---> item is an array of index and element itself

we can destructure an array and receive all items with index like this for(const [index, item] of items.entries()){ console.log(`${index+1} ${item}`) }

## Enhanced object literals

ES6 literals

example:

const created = {
date: 1998,
where: Kyiv
}

const Marok = {
name: 'Ukraine',
// instead of typing this created: created we can do like this
created
}

new method of creating methods in objects in js

const Marok = {
name: 'Ukraine',
// instead of typing this created: created we can do like this
created,
calc(date){
return 2023 - date;
}
}

## Optional chaining

ES 2020

Marok.mon.open ---> error

if we type like this: Marok?.mon?.open --> we won't receive an error

## Looping Objects

There are three methods Object.keys(), Object.values(), Object.entries();

const object = {
name: 'object',
year: 2023
}

Object.keys(object) --> ['name', 'year']

## Sets

Order of elements is irrelevant and elements in the set are unique
Here is an example of set:

const menuSet = new Set(['Pizza', 'Risotto', 'Pasta', 'Pizza', 'Pasta', 'Risotto']);

console.log(menuSet);

In order to know the length of menuSet we should type menuSet.size

In order to check if in set is an element we should just type in: menuSet.has('Pizza') --> true

To add element to a set we should type: menuSet.add('Garlic bread');
TO delete element we should type in: menuSet.delete('Pizza');
To delete all elements we should do like this: menuSet.clear();

## Maps

we can pass there a key and value which can be different data type starting from string and ending with an object or arrays;

how to create a Map?
const rest = new Map();

rest.set('userName', 'Marko');
rest.set(true, 'has driver license');
rest.set(false, 'hasn't driver license')

We can check if a map has the key or not
rest.has('userName')
in order to delete one element from map we should pass key as an argument of deleted element rest.delete('userName');
In order to clear all elements rest.clear();
Moreover we can use arrays and objects as keys in maps:

const arr = [1, 2];

rest.set(arr, 'Test');

rest.get(arr) ---> 'Test';

## Maps iteration

if we need a map from object we can do small trick:

const hoursMap = new Map(Object.entries(openingHours));
Maps are iterables

## Which data structure to use?

Arrays vs Sets
we can use arrays if we need ordered list of values and it can contain duplicates
if we don't need duplicates we can use sets

Objects and Maps
if we need detalied information about field we use objects, use when you need to include methods, use when you need to work with JSON
if we want to use value as a key and return another data we can use maps if we need map key to values, use when you need keys that are not strings.

## Working with strings

We can know the index of current letter in a string here is an example

const str = 'string';

console.log(str.indexOf('r)) //---> 2

slice() method - how it works?

slice(2, 4) --> we passed two arguments in this method and it returns a string which will contain the string starting with 2 index and ending 4 index you should keep it in mind

String.toLowerCase() --> returns a string with low case letters --> example --> 'MARKO' --> 'marko'
String.toUpperCase() -----> returns a string with upper case letters ---> 'marko' --> 'MARKO'

trim() method removes whitespaces from a string -----> Here is an example ----> 'Marko ';

String.trim();

Replace method takse two arguments the first one which you want to replace and the second one for which you want to replace example:

console.log('Markis') --> 'Markis'.replace('i', 'u')

replaceAll() method if there are several occurences it replaces all
startsWith('starts') method --> checks if it has a string ----> 'startsMarsik' --> true
endsWith('ending')

split() method it works by creating multiple strings by divider here is an example:

---

const splitString = 'a+very+tired+Markus+but+very+clever+eager';
console.log(splitString.split('+')); // returns an array with these elements[ 'a','very','tired','Markus','but','very','clever', 'eager']

---

join() methods works just the opposite we give an array and divider how should we join the string and... it works:

---

const splittedString = splitString.split('+');
const joinedString = splittedString.join(' ');
console.log('joinedString', joinedString);

---

String.padStart('+') ---> 'Markus'.padStart(10,'+') --> '++++Markus'
String.padEnd(10 , '+') ----> '++++Markus'.padEnd(15, '+') ---> '+++++Markus+++++';
method repeat

String.repeat(3) -->< 3 times >
