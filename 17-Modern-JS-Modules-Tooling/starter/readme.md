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