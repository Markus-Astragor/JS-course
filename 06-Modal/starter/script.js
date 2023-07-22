'use strict';

const buttonsModals = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal.hidden');
console.log(modalWindow);


buttonsModals.forEach(element => {
  element.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    console.log(modalWindow, '2');
  })
});