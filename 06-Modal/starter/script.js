'use strict';

const buttonsModals = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal.hidden');
let overlay = document.querySelector('.overlay.hidden');
let btnClose = document.querySelector('.close-modal');
console.log(modalWindow);


const Close = () => {
  overlay.classList.add('hidden');
  modalWindow.classList.add('hidden');
}


buttonsModals.forEach(element => {
  element.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
});

