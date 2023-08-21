'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1 ');
let currentTab, currentOperationTab;
const btnTabs = document.querySelectorAll('.operations__tab');
const btnTabsArr = [...btnTabs];

const operationsTab = document.querySelectorAll('.operations__content');
const operations__tab_container = document.querySelector('.operations__tab-container');
const operationsTabArr = [...operationsTab];
const nav = document.querySelector('.nav');
const section2 = document.querySelector('#section--2');
const container__sections = document.querySelector('.container__sections');
const header = document.querySelector('header');
const allSections = document.querySelectorAll('.section');


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


// components wsitching



const foundBtnTab = btnTabsArr.find((btnTab) => btnTab.classList.contains('operations__tab--active'));
const foundCurrentOperationTab = operationsTabArr.find(operatoinTab => operatoinTab.classList.contains('operations__content--active'));
console.log('foundCurrentOperationTab', foundCurrentOperationTab);
currentTab = foundBtnTab;
currentOperationTab = foundCurrentOperationTab;


operations__tab_container.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');
  // guard clause
  if (!clicked) return

  btnTabs.forEach(btnTab => btnTab.classList.remove('operations__tab--active')); // firstly delete all active classws
  operationsTab.forEach(operationTab => operationTab.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active'); // add needed class

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

// btnTabs.forEach((btnTab) => {
//   btnTab.addEventListener('click', (e) => {
//     if (e.target.classList === currentTab.classList) return
//     console.log(e.target.classList);
//     const [, , classNeeded] = e.target.classList;
//     const lastNum = classNeeded[classNeeded.length - 1]; // we need it for operations__content
//     console.log('lastNum', lastNum);
//     console.log('classNeeded', classNeeded);
//     currentTab.classList.remove('operations__tab--active');
//     const neededTab = btnTabsArr.find((btnTab) => btnTab.classList === e.target.classList);
//     neededTab.classList.add('operations__tab--active');
//     currentTab = neededTab;
//     const [, operation__content,] = currentOperationTab.classList;
//     const changedOperationContent = operation__content.replace(operation__content[operation__content.length - 1], lastNum);
//     currentOperationTab.classList.remove('operations__content--active');
//     const neededOperationTab = operationsTabArr.find(operationTab => operationTab.classList.contains(changedOperationContent));
//     neededOperationTab.classList.add('operations__content--active');
//     currentOperationTab = neededOperationTab;
//   })
// })

// implementing fading link

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}



nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));




// const intitialcoords = section1.getBoundingClientRect();
// console.log('intitialcoords', intitialcoords);
// window.addEventListener('scroll', () => {
//   if (window.scrollY > intitialcoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })


// const obsFunc = (entries, observerObj) => {
//   // activates each time when the observed element is being intersected
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }
// const observeOptions = {
//   // the target which is being intersected in our case section 1 is a target or as alternative we can pass null in order to have all portion recatangle to be observed
//   root: null,
//   threshold: 0.2 // at which percentage callback will be called, moreover, we can have there(threshold) an array of entries in callBack function obsFunc is this element in threshold 
// }

// const observer = new IntersectionObserver(obsFunc, observeOptions);

// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
const headerObserverFunc = (entries, observerObj) => {
  const [entry] = entries;
  if (entry.isIntersecting) nav.classList.remove('sticky'); // isIntersecting if it false it means that our target el is not in focus
  else nav.classList.add('sticky');
}

const optionsHeaderObs = {
  root: null,
  threshold: 0, // when it comes out of our view
  rootMargin: `-${navHeight}px`
}

const headerObs = new IntersectionObserver(headerObserverFunc, optionsHeaderObs);

headerObs.observe(header);



// reveailing sections

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) entry.target.classList.remove('section--hidden');
  else return

  observer.unobserve(entry.target); // optimizing in order not to do a work when we have already observed needed elements 
}

const optionsRevealingSections = {
  root: null,
  threshold: 0.15 // it will be visible as it is 15% visible
}

const sectionObserver = new IntersectionObserver(revealSection, optionsRevealingSections);

allSections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
})


// lazy-loading images

const allImages = document.querySelectorAll('img[data-src]'); // all that have a property as data src

const revealImages = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return

  entry.target.src = entry.target.dataset.src
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
    observer.unobserve(entry.target);
  })
}

const revealingImagesOptions = {
  root: null,
  threshold: 0.1
}

const imagesObserver = new IntersectionObserver(revealImages, revealingImagesOptions);

allImages.forEach(img => {
  imagesObserver.observe(img);
})

// slider
let curSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');



const createDots = () => {
  slides.forEach((_, index) => {
    const html = `<button class="dots__dot" data-slide="${index}"></button>`;
    dotContainer.insertAdjacentHTML('beforeend', html);
  })
}

const dots = document.querySelectorAll('.dots__dot');



const moveSlides = (currentSlide) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
  })
}

const activateDot = (slide) => {
  dots.forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}

dotContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    moveSlides(Number(slide));
    activateDot(Number(slide));
  }
})




slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 100}%)`;
})

const leftSliderBtn = document.querySelector('.slider__btn--left');
const rightSliderBtn = document.querySelector('.slider__btn--right');



const moveToLeft = () => {
  if (curSlide === 0) curSlide = slides.length - 1
  else curSlide--;
  moveSlides(curSlide);
  activateDot(curSlide)
}

leftSliderBtn.addEventListener('click', moveToLeft);
const moveToRight = () => {
  if (curSlide === slides.length - 1) curSlide = 0;
  else curSlide++;
  moveSlides(curSlide);
  activateDot(curSlide);
}

rightSliderBtn.addEventListener('click', moveToRight);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') moveToRight();
  if (e.key === 'ArrowLeft') moveToLeft();
});

const init = () => {
  moveSlides(0);
  createDots();
  activateDot(0);
}



// Lectures

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log('allSections', allSections);
const allBtnss = document.getElementsByTagName('button');
console.log('allBtnss', allBtnss);

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

// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);

// // non-standard

// // this way doesn't work
// // console.log(logo.designer);
// console.log(logo.getAttribute('designer')); // jonasschmedtman


// // we can also set values for attributes
// // standard way
// logo.alt = 'Beautful minimalist logo';

// // non-standard way
// logo.setAttribute('company', 'Bankist');

// logo.getAttribute('src') // we get absolute url


// // data attributes

// console.log(logo.dataset.versionNumber);


// // Classes
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


// const header__title = document.querySelector('.header__title');
// const h1 = header__title.querySelector('h1');
// // selecting a child

// console.log(h1); // js will go as deep as needed + if there are some other tags with h1 they won't be selected, because they are not children of header__title
// console.log(header__title.childNodes); // [ #text, h1, #text, h4, #text, button.btn--text.btn--scroll-to, #text, img.header__img, #text ]
// console.log(header__title.children); // just html elements only for direct children { 0: h1, 1: h4, 2: button.btn--text.btn--scroll-to, 3: img.header__img, length: 4 }
// header__title.firstElementChild.style.color = 'orangered'; // brings only first child


// // Selecting a parent

// console.log(header__title.parentNode); // <header class="header">
// console.log(header__title.parentElement); // usually what we use but in this situations they are the same <header class="header">

// h1.closest('header').style.backgroundColor = 'orange';

// // going sideways selecting siblings

// console.log(header__title.previousElementSibling); // <nav class="nav">
// console.log(header__title.nextElementSibling); // null

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('Html parsed and DOM tree is built', e);
})


window.addEventListener('load', (e) => {
  console.log('Page fully loaded');
})

// window.addEventListener('beforeunload', (e) => {
//   e.preventDefault();
//   e.returnValue = '';
// }) // when we try to close the browser we can use sth like this in order to confirm actions