'use strict';
let secretNumber = '';
let score = 20;
let highScore = 0;

const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (value) {
  document.querySelector('.number').textContent = value;
};
const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

secretNumber = randomNumber();

document.querySelector('.check').addEventListener('click', function () {
  //TEMP
  console.log(secretNumber);

  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number!');
  } else if (score > 1) {
    //When player wins
    if (guess === secretNumber) {
      displayNumber(secretNumber);
      displayMessage('Correct number!');
      setBackgroundColor('#60b347');
      setNumberWidth('30rem');

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      }

      //When guess is incorrect
    } else if (guess != secretNumber) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    }
  } else {
    displayMessage('You lost the game!');
    score--;
    displayScore(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber();
  score = 20;

  displayScore(score);
  document.querySelector('.guess').value = '';
  displayNumber('?');
  displayMessage('Start guessing...');
  setBackgroundColor('#222');
  setNumberWidth('15rem');
  //TEMP
  console.log(secretNumber);
});
