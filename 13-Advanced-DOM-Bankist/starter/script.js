'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const scrollFunc = (id) => {

  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}


document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  console.log(e.target);

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    scrollFunc(id)
  }
})

document.querySelector('.btn--scroll-to').addEventListener('click', (e) => {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  scrollFunc(id);
})

// Lectures

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');
console.log('allSections', allSections);
const allBtnss = document.getElementsByTagName('button');
console.log('allBtnss', allBtnss);
const header = document.querySelector('header');

//Creating and inserting elements

// .insertAdjacentHTML

const message = document.createElement('div'); // here we pass name of html tag and it creates a DOM element but it doesn't exist on webPage
message.textContent = 'We use cookies for improved functionality and analytic'; // here we can manipulate this dom element which we created by adding text property
message.classList.add('cookie-message');

message.innerHTML = 'We use cookies for improved functionality and analytic <buttton class="btn btn--close--cookie">Got it</button>'

// we have two element here but we can't add two at the same time they can't be here simultaneously
// header.prepend(message);

// we can clone and these messages are on the both places
// header.append(message.cloneNode(true));

// before and after
//header.before(message) // makes this element before header
header.after(message) // makes this message after

// delete elements
const closeCookiesMessage = document.querySelector('.btn--close--cookie');
closeCookiesMessage.addEventListener('click', () => {
  message.remove();
})

// Styles, Attributes and Classes


// Styles
message.style.backgroundColor = '#37383d';

// we can't read all properties which are on message dom element but we can read properties which we pass
console.log(message.style.backgroundColor); // rgb(55, 56, 61)
console.log(message.style); // it gives only styles which we passed

// but we can receive styles if we want
console.log(getComputedStyle(message)); // and we receive a really big object with styles
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)

// document.documentElement.style.setProperty('--color-primary', 'orangered') // here we pass css variable as first argument and color on which we want to change the second one

// attributes

// there are standard ways of getting attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.src);

// non-standard

// this way doesn't work
// console.log(logo.designer);
console.log(logo.getAttribute('designer')); // jonasschmedtman


// we can also set values for attributes
// standard way
logo.alt = 'Beautful minimalist logo';

// non-standard way
logo.setAttribute('company', 'Bankist');

logo.getAttribute('src') // we get absolute url


// data attributes

console.log(logo.dataset.versionNumber);


// Classes
// don't use
// logo.className = 'jonas' // overwrite all classes which are existing on dom elemets

// const btnScroll = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScroll.addEventListener('click', (e) => {
//   const coordinatesSection = section1.getBoundingClientRect(); // receiving coordinates from section 1
//   console.log(e.target.getBoundingClientRect());

//   console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

//   // old school way
//   // window.scrollTo(coordinatesSection.left + window.pageXOffset,
//   //   coordinatesSection.top + window.pageYOffset
//   // )

//   section1.scrollIntoView({ behavior: 'smooth' })
// })


// Event Propagation: Bubbling and Capturing

// const ul = document.querySelector('ul');
// const nav = document.querySelector('.nav');



// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + min);

// console.log(randomInt(1, 255));

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;


// document.querySelector('ul').addEventListener('click', function (event) {
//   this.style.backgroundColor = randomColor();
//   console.log('ul', event.target, event.currentTarget); // when we click on ul ul is a target
//   // event.stopPropagation() // not recommmended but you can use if you need
// })

// document.querySelector('.nav').addEventListener('click', function (event) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', event.target, event.currentTarget);// when we click on nav is only a target, current targer is on element which has this event attached
// }, true) // bubling phase when we set to true it will be first


const header__title = document.querySelector('.header__title');
const h1 = header__title.querySelector('h1');
// selecting a child

console.log(h1); // js will go as deep as needed + if there are some other tags with h1 they won't be selected, because they are not children of header__title
console.log(header__title.childNodes); // [ #text, h1, #text, h4, #text, button.btn--text.btn--scroll-to, #text, img.header__img, #text ]
console.log(header__title.children); // just html elements only for direct children { 0: h1, 1: h4, 2: button.btn--text.btn--scroll-to, 3: img.header__img, length: 4 }
header__title.firstElementChild.style.color = 'orangered'; // brings only first child


// Selecting a parent

console.log(header__title.parentNode); // <header class="header">
console.log(header__title.parentElement); // usually what we use but in this situations they are the same <header class="header">

h1.closest('header').style.backgroundColor = 'orange';

// going sideways selecting siblings

console.log(header__title.previousElementSibling); // <nav class="nav">
console.log(header__title.nextElementSibling); // null