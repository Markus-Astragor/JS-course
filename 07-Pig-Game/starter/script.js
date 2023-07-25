'use strict';



// Start with putting to zero all elements before any game
const scorePlayers = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');

const Start = () => {
  for (let i = 0; i < scorePlayers.length; i++) {
    scorePlayers[i].textContent = 0;
    currentScores[i].textContent = 0;
  }
}



let guessNumber;

const NewGame = () => {
  Start()
  guessNumber = Math.round(Math.random() * 5) + 1;
  const cubes = document.querySelector('.dice');
  cubes.src = `dice-${guessNumber}.png`;
  cubes.style.display = 'block';
  console.log('guessNumber', guessNumber);
}



