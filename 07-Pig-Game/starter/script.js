'use strict';



// Start with putting to zero all elements before any game
let guessNumber, generalScorePlayer1, currentFieldScore, sectionPlayer, players, i, cubes, score, fieldscore, sum, fieldScoreSum, currentScore;
sum = 0;
fieldScoreSum = 0;
sectionPlayer = document.querySelector('.player--active');
const scorePlayers = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');
const playersScoresArray = [
  { name: 'Player 1', scores: [] },
  { name: 'Player 2', scores: [] }
]

i = 0;
score = document.querySelectorAll('.score');
currentScore = document.querySelectorAll('.current-score');
currentFieldScore = currentScore[i];
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
      currentFieldScore = currentScore[i];
    }
    else {
      sectionPlayer.classList.remove('player--active')
      players[i + 1].classList.add('player--active');
      fieldscore = score[i + 1];
      currentFieldScore = currentScore[i + 1];
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
    if (guessNumber === 1) {
      currentFieldScore.textContent = 0;
      sum = 0;
      SwitchPlayer();
    }
    else {
      sum = sum + guessNumber;
      currentFieldScore.textContent = sum;
    }

  }
}

const Hold = () => {
  fieldScoreSum = fieldScoreSum + sum
  fieldscore.textContent = fieldScoreSum;
  currentFieldScore.textContent = 0;
  SwitchPlayer();
  sum = 0;
  fieldScoreSum = 0;
}


const NewGame = () => {
  Start();
  SwitchPlayer(sectionPlayer);
}



