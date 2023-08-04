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
