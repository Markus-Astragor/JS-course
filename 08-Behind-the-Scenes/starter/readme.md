document.addEventListener('keydown', (event) => console.log("The button was pressed"))

Keydown means when key is pressed.
Keyup means when user releases the key(відпускає)

Javascript is high-level prototype-based object-oriented multi-paradigm, interpreted or just-in-time compilled, dynamic, single-threaded, garbage-collected, first-class-functions, with event-loop concurrency model.

## High level

It means that in js we don't need to worry about cleaning memory as in C or C++. Js has interpretators which do that for us.

## Garbage-collected

It deletes unused objects from our computer memory

## Interpreted or just-in-time compilled

Computer understands only 0 and 1. It is not common to write machine code that's why we write human-reedable code such in JavaScript. It is an abstraction over machine code.

## Multi-paradigm

We can classify paradigms into two ways: imperative and declarative.
There are three approaches to write code:

1. Functional approach(first-class functions it means that they are treated as variables the simple example is that we can pass some function as an argument )
2. OOP(prototype-based object-oriented)
   As far as i understood array is an object and it is as a dataStructure already declared with some methods on it. For instance, as push method.
3. Procedural programming (oraganizing the code in a linear way and just type some functions between)

## Dynamic

let x = 10
x = 23
x = "Nazlo"

You shouldn't say that is x int or string and so on.

## Concurrency modal

So that's how javascript can do multiple tasks simultaneously.

---

## Engine runtime process

When we ended to write a programm it convertes to AST and in this stage it is checked if it has some syntax errors or not. After that this program convertes to machine code for 0 or 1

## CallStack and Heap

CallStack is where functions execute and Heap is where objects store

## Explanantion of the weird behaviour of objects

const Marko = {
name: 'Marko',
age: 18
}

const Sara = Marko;
Sara.age = 17

console.log('Sara', Sara); --> {name: 'Marko', age: 17}
console.log('Marko', Marko); --> {name: 'Marko', age: 17}

We have two objects initial age is 18 but when we don't change age directly from Marko's object we have the same value as Sara's;

And these objects point to the same memory cell with address(клітинка пам'яті) in which this information is contained
when we do Sara.age = 17 we change directly the age variable in object Marko which is an initial one.

When we talk about ordinary variables when we change them we create new cell in memory
let age = 17; --> // memory cell 001
let oldAge = age; // points to 001
age = age + 1 --> 18 // we create new memory cell 002

console.log('age', age) --> 18 points to new memory cell 002
console.log('oldAge', oldAge) --> 17 points to old memory cell

Object.assign({}, Marko);

--> it creates object which merge Marko's Object and empty object
