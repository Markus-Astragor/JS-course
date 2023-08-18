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


## Event Propagation: Bubbling and Capturing

first of all when we attach click event to the element it goes through the all tags and then when it goes to the target element it begins to use that target event listener 

capturing phase --> target phase --> bubbling phase 

Capturing when we just clicked on the link

Target when the tag on which this click was handled through all parent tags

Bubling phase from the root it uses this event

So if we have such html structure

 <nav class="nav">
      <img src="img/logo.png" alt="Bankist logo" class="nav__logo" id="logo" designer="jonasschmedtman"
        data-version-number="3.0" />
      <ul class="nav__links">
        <li class="nav__item">
          <a class="nav__link" href="#section--1">Features</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#section--2">Operations</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#section--3">Testimonials</a>
        </li>
        <li class="nav__item">
          <a class="nav__link nav__link--btn btn--show-modal" href="#">Open account</a>
        </li>
      </ul>
    </nav>


const ul = document.querySelector('ul');
const nav = document.querySelector('.nav');

nav.addEventListener('click', () => {
  console.log('clicked nav');
})

ul.addEventListener('click', () => {
  console.log('clicked ul');
})

nav element is the parent and if we click on ul and we have eventListener on parent element it will also execute

! Not all events have bubbling and capturing phases

## DOM Traversing

