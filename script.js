
var min = 1;
var max = 100;
var minInput = document.getElementById('minInput');
var maxInput = document.getElementById('maxInput');
var randomNumber = randomNum();
var guessInput = document.getElementById('numberInput');
var guessButton = document.querySelector('.guessButton');
var clearButton = document.querySelector('.clearButton');
var resetButton = document.querySelector('.resetButton');
var rangeButton = document.querySelector('.rangeButton');
var rangeFeedback = document.querySelector('.rangeFeedback');
var feedback1 = document.querySelector('.feedback1');
var guessOutput = document.querySelector('.guessOutput');
var feedback2 = document.querySelector('.feedback2');
var rangeArea = document.querySelector('.rangeArea');
var guessArea = document.querySelector('.guessArea');
var playAgainButton = document.querySelector('.play-again-button');
var buttonArea = document.querySelector('.button-area');

disableButtons();
displayRange();
hideGuessArea();
hidePlayAgainButton();


rangeButton.addEventListener('click', function(e) {
  e.preventDefault();
  checkRange();
  disableButtons();
  rangeButton.disabled = 'true';
});

guessButton.addEventListener('click', function(e) {
  e.preventDefault();
  getGuess();
  enableButtons();
  check();
});

clearButton.addEventListener('click', function(e) {
  e.preventDefault();
  clear();
  disableButtons();
});

resetButton.addEventListener('click', function(e) {
  e.preventDefault();
  reset();
  resetRange();
  displayRangeInputs();
  disableButtons();
});

playAgainButton.addEventListener('click', function(e) {
  e.preventDefault();
  buttonArea.style.visibility = 'visible';
  // guessButton.style.visibility = 'visible';
  // clearButton.style.visibility = 'visible';
  // guessInput.style.display = 'block';
  playAgain();
  hidePlayAgainButton();
});

minInput.addEventListener('keyup', function() {
  rangeButton.disabled = false;
});

guessInput.addEventListener('keyup', function() {
  enableButtons();
});

function randomNum() {
  randomNumber = Math.floor((Math.random() * (max - min) + min));
  console.log('the random # is ' + randomNumber);
  return randomNumber;
}

function compare(randomNumber, guessInput) {
  if (guessInput < randomNumber){
    // console.log('That is too low');
    feedback2.innerText = 'That is too low';
  } else if (guessInput > randomNumber){
    // console.log('That is too high');
    feedback2.innerText = 'That is too high';
  } else {
    // console.log('BOOM!');
    min = (min - 10);
    max = (max + 10);
    feedback1.innerText = 'Level up!!!!';
    feedback2.innerText = 'Your new range is between ' + min + ' and ' + max;
    playAgainButton.style.display = "inline-block";
    resetButton.style.display = 'none';
    buttonArea.style.visibility = 'hidden';
  }
}

function check() {
  var guess = parseInt(guessInput.value);
  if (isNaN(guess) === true){ 
    console.log('input is invalid');
    invalidInput();
  } else if (guess > max || guess < min) {
    invalidInput();
  } else {
    compare(randomNumber, guess);
  }
}

function checkRange() {
  var newMin = parseInt(minInput.value);
  var newMax = parseInt(maxInput.value);
  if (isNaN(newMin) === true || isNaN(newMax) === true) {
    // console.log('input is invalid');
    rangeFeedback.innerText = "invalid input! Please enter a range of numbers you would like to guess between!"
  } else if (newMin > newMax) {
    // console.log("min > max");
    rangeFeedback.innerText = "invalid input! The minimum number must be smaller than the max. Please enter a range of numbers you would like to guess between!"
  } else if (newMin === newMax) {
    // console.log("min equals max");
    rangeFeedback.innerText = "invalid input! The minimum and maximum can not be equal. Please enter a range of numbers you would like to guess between!"
  } else {
    // console.log('working')
    changeMin();
    changeMax();
    randomNum();
    hideRangeInputs();
    displayGuessArea();
    displayRange();
    rangeButton.disabled = true;
  }
}

function changeMin() {
  min = parseInt(minInput.value);
  // console.log('new min is ' + min);
  return min;
}

function changeMax() {
  max = parseInt(maxInput.value);
  // console.log('new max is ' + max);
  return max;
}

function resetRange() {
  min = 1;
  max = 100;
  document.getElementById('minInput').value = '';
  document.getElementById('maxInput').value = '';
  //console.log('min ' + min + ' max ' + max);
}

function getGuess() {
  var guess = parseInt(guessInput.value);
  // console.log(guess);
  feedback1.innerText = 'Your last guess was';
  guessOutput.innerText = guess;
}

function clear() {
  guessInput.value = '';
  setFocus();
}

function reset() {
  var randomNumber = randomNum();
  displayRange();
  clear();
  disableButtons();
  hideGuessArea();
}

function disableButtons() {
  clearButton.disabled = true;
  clearButton.style.backgroundColor = '#D0D2D3';
  resetButton.disabled = true;
  resetButton.style.backgroundColor = '#D0D2D3';
  guessButton.disabled = true;
  guessButton.style.backgroundColor = '#D0D2D3';
}

function enableButtons() {
  clearButton.disabled = false;
  clearButton.style.backgroundColor = '#929497';
  resetButton.disabled = false;
  resetButton.style.backgroundColor = '#929497';
  guessButton.disabled = false;
  guessButton.style.backgroundColor = '#929497';
}

function invalidInput() {
  feedback1.innerText = 'Stop being difficult!!!! Follow directions for once!';
  feedback2.innerText = 'Please enter a number between ' + min + ' and ' + max;
  guessOutput.innerText = '';
}

function displayRange() {
  feedback1.innerText = 'Please enter a number between ' + min + ' and ' + max;
  guessOutput.innerText = '';
  feedback2.innerText = '';
}

function setFocus() {
  guessInput.focus();
}

function hideRangeInputs() {
  rangeArea.style.display = 'none';
}

function displayRangeInputs() {
  rangeArea.style.display = 'block';
}

function hideGuessArea () {
  guessArea.style.display = 'none';
}

function displayGuessArea () {
  guessArea.style.display = 'block';
}

function hidePlayAgainButton () {
  playAgainButton.style.display = 'none';
}

function showResetButton () {
  resetButton.style.display = 'block';
}

function playAgain () {
  // console.log("the new min and max are: " + min + " and " + max);
  randomNum();
  clear();
  displayRange();
  disableButtons();
  resetButton.style.display = 'inline-block';
}
