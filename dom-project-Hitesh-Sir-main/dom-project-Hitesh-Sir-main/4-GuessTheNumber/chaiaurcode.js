// we first need to produce a random number for this we use math library
let randomNumber = parseInt(Math.random() * 100 + 1);
// now we have to get variables or buttons
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
// and we will need to enter a paragraph so for this
const p = document.createElement('p');

// now we want to store guesses of user in some array and want to count number of guesses  so for this
let prevGuess = [];
let numGess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    // the value from user is
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
// now we will run different functions
function validateGuess(guess) {
  // is the given number correct or not
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was:${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // to check guess value is low or high or what
  if (guess === randomNumber) {
    displayMessage('CONGRATULATIONS! Your Guess Is Correct');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Your Guess is TOO Low');
  } else if (guess > randomNumber) {
    displayMessage('Your Guess is TOO High');
  }
}
function displayGuess(guess) {
  // to display the guess a kind of cleanup that will update the values everywhere
  userInput.value = '';
  guessSlot.innerHTML += `${guess} ,`;
  numGess++;
  remaining.innerHTML = `${11 - numGess}`;
}
function displayMessage(message) {
  // this will work with DOM
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  //
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
