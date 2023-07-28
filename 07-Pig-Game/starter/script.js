'use strict';



// Start with putting to zero all elements before any game
let guessNumber, generalScorePlayer1, currentFieldScore, sectionPlayer, players, i, cubes, score, fieldscore;
sectionPlayer = document.querySelector('.player--active');
const scorePlayers = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');

i = 0;
score = document.querySelectorAll('.score');
fieldscore = score[i];
const SwitchPlayer = () => {
  players = document.querySelectorAll('.player');
  score = document.querySelectorAll('.score');
  if (players[i] === sectionPlayer) {
    if (players[i + 1] === undefined) {
      i = 0
      sectionPlayer.classList.remove('player--active');
      players[i].classList.add('player--active');
      fieldscore = score[i];
      cubes.style.display = 'none';
    }
    else {
      sectionPlayer.classList.remove('player--active')
      players[i + 1].classList.add('player--active');
      fieldscore = score[i + 1];
      cubes.style.display = 'none';
      i++;
    }
  }
  sectionPlayer = document.querySelector('.player--active');

}

const Start = () => {
  for (let i = 0; i < scorePlayers.length; i++) {
    scorePlayers[i].textContent = 0;
    currentScores[i].textContent = 0;
    cubes.style.display = 'none';
  }
}


const RollDice = () => {
  guessNumber = Math.round(Math.random() * 5) + 1;
  cubes = document.querySelector('.dice');
  cubes.src = `dice-${guessNumber}.png`;
  cubes.style.display = 'block';
  if (sectionPlayer) {
    currentFieldScore = document.querySelector('.current-score');
    if (guessNumber === 1) {
      currentFieldScore.textContent = 0;
      SwitchPlayer();
    }
    else
      currentFieldScore.textContent = guessNumber;
  }
}

const Hold = () => {
  fieldscore.textContent = guessNumber;
  SwitchPlayer()
}


const NewGame = () => {
  Start();
  SwitchPlayer(sectionPlayer);
}



