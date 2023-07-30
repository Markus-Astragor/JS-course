'use strict';



// Start with putting to zero all elements before any game
let guessNumber, currentFieldScore, sectionPlayer, players, i, cubes, score, fieldscore, sum, fieldScoreSum, currentScore, sumPoints, isWinner;
sum = 0;
fieldScoreSum = 0;
sumPoints = 0;
sectionPlayer = document.querySelector('.player--active');
let scorePlayers = document.querySelectorAll('.score');
let currentScores = document.querySelectorAll('.current-score');
const playersScoresArray = [
  { name: 'Player 1', scores: [] },
  { name: 'Player 2', scores: [] },
]

i = 0;
score = document.querySelectorAll('.score');
currentScore = document.querySelectorAll('.current-score');
currentFieldScore = currentScore[i];
fieldscore = score[i];


const makeArrayEmpty = () => {
  for (let i = 0; i < playersScoresArray.length; i++) {
    playersScoresArray[i].scores = [];
  }
}

const disableButtons = () => {
  const buttons = document.querySelectorAll('.btn');
  if (isWinner) {
    for (let i = 1; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
  else {
    for (let i = 1; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
  }
}

const calcSum = array => {
  return array.reduce((point, point2) => point + point2)
}

const checkWinner = (points) => {
  if (points >= 100) {
    sectionPlayer.classList.add('player--winner');
    isWinner = true;
    disableButtons();
    return points
  }
  else
    return points;
}






const SwitchPlayer = (scores) => {
  players = document.querySelectorAll('.player');
  score = document.querySelectorAll('.score');
  if (players[i] === sectionPlayer) {
    if (players[i + 1] === undefined) {
      i = 0
      fieldscore = score[i + 1];
      playersScoresArray[i + 1].scores.push(scores === undefined ? 0 : scores);
      sumPoints = calcSum(playersScoresArray[i + 1].scores);
      fieldscore.textContent = checkWinner(sumPoints);
      sectionPlayer.classList.remove('player--active');
      players[i].classList.add('player--active');
      currentFieldScore = currentScore[i];
    }
    else {
      fieldscore = score[i];
      playersScoresArray[i].scores.push(scores === undefined ? 0 : scores);
      sumPoints = calcSum(playersScoresArray[i].scores)
      fieldscore.textContent = checkWinner(sumPoints);
      sectionPlayer.classList.remove('player--active')
      players[i + 1].classList.add('player--active');
      currentFieldScore = currentScore[i + 1];
      i++;
    }
  }
  sectionPlayer = document.querySelector('.player--active');

}

const Start = () => {
  console.log(scorePlayers, currentScores);
  for (let i = 0; i < scorePlayers.length; i++) {
    scorePlayers[i].textContent = 0;
    currentScores[i].textContent = 0;
  }
  cubes.style.display = 'none';

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
  fieldScoreSum = fieldScoreSum + sum;
  SwitchPlayer(sum);
  currentFieldScore.textContent = 0;
  sum = 0;
}


const NewGame = () => {
  const winner = document.querySelector('.player--winner');
  isWinner = false;
  Start();
  disableButtons();
  makeArrayEmpty();
  winner.classList.remove('player--winner');
}



