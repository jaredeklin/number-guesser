
var min = 1;
var max = 100;
var randomNumber = randomNum();
var guessInput = document.getElementById('numberInput');
var guessButton = document.querySelector('.guessButton');
var clearButton = document.querySelector('.clearButton');
var resetButton = document.querySelector('.resetButton');
var allButtons = document.querySelector('button');
var rangeButton = document.querySelector('.rangeButton');
var feedback1 = document.querySelector('.feedback1');
var guessOutput = document.querySelector('.guessOutput');
var feedback2 = document.querySelector('.feedback2');
var rangeArea = document.querySelector('.rangeArea');
var guessArea = document.querySelector('.guessArea');

disableButtons();
displayRange();
hideGuessArea();

// setFocus();

rangeButton.addEventListener('click', function(e){
  e.preventDefault();
  changeMin();
  changeMax();
  displayRange();
  randomNum();
  hideRangeInputs();
  displayGuessArea();
});

guessButton.addEventListener('click', function(e){
  e.preventDefault();
  getGuess();
  enableButtons();
  check();
});


clearButton.addEventListener('click', function(e){
  e.preventDefault();
  clear();
});

resetButton.addEventListener('click', function(){
  reset();
  resetRange();
  displayRangeInputs();
});

function randomNum(){
  randomNumber = Math.floor((Math.random() * max) + min);
  console.log('the random # is ' + randomNumber);
  return randomNumber;
}

function compare(randomNumber, guessInput){
  if (guessInput < randomNumber){
    console.log('That is too low');
    document.querySelector('.feedback2').innerText = 'That is too low';
  } else if (guessInput > randomNumber){
    console.log('That is too high');
    document.querySelector('.feedback2').innerText = 'That is too high';
  } else {
    console.log('BOOM!');
    document.querySelector('.feedback2').innerText = 'BOOM!';
  }
}

function check(){
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

function changeMin(){
  min = document.querySelector('#minInput');
  min = parseInt(min.value);
  console.log('new min is ' + min);
  return min;
}

function changeMax(){
  max = document.querySelector('#maxInput');
  max = parseInt(max.value);
  console.log('new max is ' + max);
  return max;
}

function resetRange(){
  min = 1;
  max = 100;
  document.getElementById('minInput').value = '';
  document.getElementById('maxInput').value = '';
  console.log('min ' + min + ' max ' + max);
}


function getGuess() {
  var guess = parseInt(guessInput.value);
  console.log(guess);
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
  setFocus();
}

function disableButtons() {
  clearButton.disabled = true;
  clearButton.style.backgroundColor = '#D0D2D3';
  resetButton.disabled = true;
  resetButton.style.backgroundColor = '#D0D2D3';
}

function enableButtons() {
  clearButton.disabled = false;
  clearButton.style.backgroundColor = '#929497';
  resetButton.disabled = false;
  resetButton.style.backgroundColor = '#929497';
}

function invalidInput() {
  console.log('Please enter a number between 1 and 100!');
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


