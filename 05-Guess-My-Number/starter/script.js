'use strict';

//Implementing the logic of creating guessed number
const highScoreGet = localStorage.getItem('highScore');
const highScoreGetNumber = Number(highScoreGet);

let bodyStyle = document.body.style;
let guessNumber = Math.round(Math.random() * 20);
let scoreField = document.querySelector('.score');
let score = 20;
let highScoreField = document.querySelector('.highscore');
highScoreField.innerText = !highScoreGet ? 0 : highScoreGet;
let highScore;

//Implementing the logic of getting input data and check if it is higher, lower or exact as guessed earlier

const checkResult = (number, message) => {

  if (score === 0) {
    message.innerText = 'You lost the game :(';
    return
  }

  if (guessNumber > number || guessNumber < number) {
    score--
    number < guessNumber ? message.innerText = 'Try again your number should be higher' : message.innerText = 'Try again your number is too high';
    scoreField.innerText = score;
    return
  }
  else {
    message.innerText = `Congratulations you won this game`
    bodyStyle.backgroundColor = 'green';
    document.querySelector('.number').innerText = number;
    if (!highScoreGetNumber || score > highScoreGetNumber) {
      highScore = score;
      localStorage.setItem('highScore', highScore);
      highScoreField.innerText = highScore;
    }
  }
}


const submit = () => {
  const inputData = document.querySelector('.guess').value;
  const inputDataParsed = Number(inputData);
  const messageParagrpaph = document.querySelector('.message');
  checkResult(inputDataParsed, messageParagrpaph)
}

const again = () => {
  score = 20
  const messageParagrpaph = document.querySelector('.message');
  document.querySelector('.guess').value = 0
  messageParagrpaph.innerText = 'Start guessing...';
  bodyStyle.backgroundColor = '#222';
  guessNumber = Math.round(Math.random() * 20);
  document.querySelector('.number').innerText = '?';
  scoreField.innerText = score;
}

