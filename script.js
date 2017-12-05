
var min = 1;
var max = 100;
var randomNumber = randomNum();
var guessInput = document.getElementById('numberInput');
var guessButton = document.querySelector('.guessButton');
var clearButton = document.querySelector('.clearButton');
var resetButton = document.querySelector('.resetButton');
var allButtons = document.querySelector('button');

disableButtons();
displayRange();

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
  } else if (guess > max || guess < min){
    invalidInput();
  } else {
    compare(randomNumber, guess);
  }
}

function getGuess(){
  var guess = parseInt(guessInput.value);
  console.log(guess);
  document.querySelector('.feedback1').innerText = 'Your last guess was';
  document.querySelector('.guessOutput').innerText = guess;
}

function clear(){
  document.getElementById('numberInput').value = '';
}

function reset(){
  var randomNumber = randomNum();
  document.querySelector('.feedback1').innerText = '';
  document.querySelector('.guessOutput').innerText = '';
  document.querySelector('.feedback2').innerText = '';
  clear();
  disableButtons();
}

function disableButtons(){
  document.querySelector('.clearButton').disabled = true;
  document.getElementById('clearButton').style.backgroundColor = '#D0D2D3';
  document.querySelector('.resetButton').disabled = true;
  document.getElementById('resetButton').style.backgroundColor = '#D0D2D3';
}

function enableButtons(){
  document.querySelector('.clearButton').disabled = false;
  document.getElementById('clearButton').style.backgroundColor = '#929497';
  document.querySelector('.resetButton').disabled = false;
  document.getElementById('resetButton').style.backgroundColor = '#929497';
}

function invalidInput(){
  console.log('Please enter a number between 1 and 100!');
  document.querySelector('.feedback1').innerText = 'Please enter a number between 1 and 100!';
  document.querySelector('.guessOutput').innerText = '';
  document.querySelector('.feedback2').innerText = '';
}

// function changeMin(){
//   min = document.querySelector('');
//   return min;
// }

// function changeMax(){
//   max = document.querySelector('');
//   return max;
// }

function displayRange(){
  document.querySelector('.feedback1').innerText = 'Please enter a number between ' + min + ' and ' + max;
}








