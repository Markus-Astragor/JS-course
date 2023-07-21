'use strict';

//Implementing the logic of creating guessed number
const guessNumber = Math.round(Math.random() * 20);


//Implementing the logic of getting input data and check if it is higher, lower or exact as guessed earlier

const checkResult = (number, message) => {

  if (guessNumber > number) {
    message.innerText = 'Try again your number should be higher'
  }
  else if (guessNumber < number) {
    message.innerText = 'Try again your number is too high'
  }
  else {
    message.innerText = `Congratulations you won this game the ${number}`
    document.body.style.backgroundColor = 'green';
  }
}


const submit = () => {
  const inputData = document.querySelector('.guess').value;
  const inputDataParsed = Number(inputData);
  const messageParagrpaph = document.querySelector('.message');
  checkResult(inputDataParsed, messageParagrpaph)
}

const again = () => {
  const messageParagrpaph = document.querySelector('.message');
  messageParagrpaph.innerText = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
}

