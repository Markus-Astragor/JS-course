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