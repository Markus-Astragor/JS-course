## How the DOM Really Works
DOM is the interface between javacript code and the browser html documents that are rendered

it allows us:
- to make js interact with the browser
- create, modify and delete elements, set styles, classes and attributes, listen and respond to events
- dom tree is generated from html and we can interact with
- contains lots of methods

Node is represented as JS Object it has such properties:
.textContent()
.childNodes()
.parentNode()
.cloneNode()

Node:
- element
- text
- comment 
- document

if we have <p>Paragraph</p> it is type of text and it is node element which has lots of useful properties

!Inheriatnce make all of these elements work because each of html elements have .addEventListener(), .cloneNode(), or closest() methods

Document is another type of node:
document.querySelectorAll('.example')
document.createElement('.example')
document.getElementById('#example')

EventTarget 
.addEventListener()
.removeEventListener()

Window 
Global object lots of methods and properties many unrelated to DOM

## Selecting, Creating, and Deleting Elements
Difference between nodelist and htmlcollection is that we can easily delete an element from html collection because we just can use inspector if we do the same with the nodeList we can't do that we still have the same quantity

document.getElementsByClassName() ---> returns a HTML collection
document.getElementsByTagName('button');

but document.querySelectorAll() --> returns a nodeList which doesn't change if you delete it manually

---
Creating and inserting elements

.insertAdjacentHTML('afterbegin', html);
document.createElement('div'); // here we pass name of html tag

## Styles, Attributes and Classes


// Styles, Attributes and Classes


// Styles
message.style.backgroundColor = '#37383d';

// we can't read all properties which are on message dom element but we can read properties which we pass
console.log(message.style.backgroundColor); // rgb(55, 56, 61)
console.log(message.style); // it gives only styles which we passed

// but we can receive styles if we want
console.log(getComputedStyle(message)); // and we receive a really big object with styles
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)

document.documentElement.style.setProperty('--color-primary', 'orange-red')



logo.classList.add()
logo.classList.remove()
logo.classList.toggle()
logo.classList.contains()