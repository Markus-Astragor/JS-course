'use strict';



// Start with putting to zero all elements before any game
let guessNumber, generalScorePlayer1, currentFieldScore, sectionPlayer, players, j;
j = 0;
sectionPlayer = document.querySelector('.player--active');
const scorePlayers = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');


const SwitchPlayer = (activePlayer) => {
  players = document.querySelectorAll('.player');
  for (let i = 0; i < players.length; i++) {
    if (players[i] === sectionPlayer) {
      if (players[i + 1] === undefined) {
        i = 0
        sectionPlayer.classList.remove('player--active');
        players[i].classList.add('player--active');
        break;
      }
      else {
        sectionPlayer.classList.remove('player--active')
        players[i + 1].classList.add('player--active');
      }
    }
    sectionPlayer = document.querySelector('.player--active');
    if (i === 0 && j === 0) {
      j++
      break;
    }

  }
}

const Start = () => {
  for (let i = 0; i < scorePlayers.length; i++) {
    scorePlayers[i].textContent = 0;
    currentScores[i].textContent = 0;
  }
}


const RollDice = () => {
  guessNumber = Math.round(Math.random() * 5) + 1;
  const cubes = document.querySelector('.dice');
  cubes.src = `dice-${guessNumber}.png`;
  cubes.style.display = 'block';
  if (sectionPlayer) {
    currentFieldScore = document.querySelector('.current-score');
    if (guessNumber === 1) {
      currentFieldScore.textContent = 0;
      SwitchPlayer(sectionPlayer);
    }
    else
      currentFieldScore.textContent = guessNumber;
  }
}

const NewGame = () => {
  Start();
  SwitchPlayer(sectionPlayer);
}



