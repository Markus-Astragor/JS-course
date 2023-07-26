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



let guessNumber, generalScorePlayer1, currentFieldScore;

const NewGame = () => {
  Start()
}

const SwitchPlayer = (activePlayer) => {
  let players = document.querySelectorAll('.player');
  for (let i = 0; i < players.length; i++) {
    if (players[i] === activePlayer) {
      if (players[i + 1] === undefined) {
        i = 0
        activePlayer.classList.remove('player--active');
        players[i].classList.add('player--active');
      }
      else {
        players[i].classList.remove('player--active')
        players[i + 1].classList.add('player--active');
      }
    }
  }
}

const RollDice = () => {
  guessNumber = Math.round(Math.random() * 5) + 1;
  const cubes = document.querySelector('.dice');
  cubes.src = `dice-${guessNumber}.png`;
  cubes.style.display = 'block';
  let sectionPlayer = document.querySelector('.player--active');
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





