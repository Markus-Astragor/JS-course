## An Overview of Modules in JavaScript

- module it is a reusable piece of code that hides implementation details (so we don't see how it is created)
- usually standalone file but not necessary

Whatever we export from module is called <b>public api</b>

They can be used in different methods:
- compose software: modules are small building blocks that we put together to build complex applications 
- Isolate components: modules can be developed in isolation without thinking about the entire codebase
- abstract code: we just use the module which can be written by other developers without knowing we just use it
- organized codebase: modules lead to a more organized codebase
- reuse code: modules allow us to reuse code easly

modules are imported synchronously 

## Top-Level await (ES2022)

We can use top level await in modules

if we use that it blocks our entire module

##  A Brief Introduction to the Command Line

ls - we need to see the content in current folder

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
------        07.02.2022     10:18             52 .prettierrc
------        07.02.2022     10:18           1546 clean.js
-a----        31.08.2023     21:41            772 index.html
-a----        31.08.2023     23:03            924 readme.md
-a----        31.08.2023     23:25           1969 script.js
-a----        31.08.2023     22:00            522 shoppingCart.js

## Introduction to NPM

cool methods in lodash library

## Review: Writing Clean and Modern JavaScript

Readable code:
- Write code so that others can understand it
- Write understandable code in order you to understand it if you return back in 1 year
- Avoid too clever and overcomplicated solutions
- Using descriptive variable names: what they contain
- use descriptive function names: what they do

General principles: 
- Use DRY principle (refactor your code)
- Don't pollute global namespace
- Don't use var
- Use strong type checks (=== and !==)

Functions:
- Generally, functions should do only one thing
- Don't use more than 3 function parameters
- Use default parameters whenever possible
- Generally, return the same data type as received
- Use arrow functions when they make code more readable

OOP:
- Use ES6 classes
- Encapsulate data and don't mutate it from outside of the class
- Implement method chaining 
- Do not use arrow functions as methods in regular objects (they don't have thir own this keyword)

Avoid nested code:
- Use early return (guard classes)
- Use ternary operator instead of if
- Use multiple if instead of if/else-if // multiple if is better
- Avoid for loops, use array methods instead
- Avoid callback-based async apis 

Async code: 
- Consume promises with async/await for best readability
- Whenever it is possible, run code in parallel
- Handle errors and promise rejections

## Declarative and Functional JavaScript Principles

There are different paradigms of writing code: 
Declarative and Imperative

When we do imperative programming we need to explain how to do things:
- We explain every single step it has to follow to achieve a result

Example: 

1. Step-by-step recipe of a cake 

Example of code of imperative programm: 

const arr = [2, 4, 6, 8]; // create array with these elements
const doubled = []; // create an empty arr
for(let i = 0; i < arr.length; i++) {
  doubled[i] = arr[i] * 2;
}

Declarative programming is when we tell computer what to do:

- We simply describe the way the computer should achieve the result
- The How (step-by-step instructins) gets abstracted away

Declarative example: 
const arr = [2, 4, 6, 8];
const doubled = arr.map(el => el * 2);

Functional programming: 
- Declarative programming paradigm 
- Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data

<b style="color: red">Side effect:<b> Modification mutation any data otside of function (mutating external variables, logging to console, writing to DOM)
<b>Pure function:</b> it is a function without side effects. Doesn't depend on external variables. Given the same inputs, always returns the same output

So pure functions are all about avoiding mutating data

State(data) is not modified but copy can be changed and modified

Examples of using functional programming are: react, redux

Functional programming techniques: 
- Try to avoid data mutations
- Use built-in methods that don't produce side effects
- Do data transformations with methods such as: map and filter and reduce
- Try to avoid side effects in functions: this is of course not always possible

Decalarative syntax:
- use array and object destructuring
- use the spread operator
- use the ternary operator 
- use template literals

## Let's Fix Some Bad Code: Part 2

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100
})

Object.freeze makes object immutable because we can't add new properties to this object

functions which mutate data are called impure functions