  var letters = ["o", "m", "g", "k", "o", "m", "a", "l"];

  var lettersGuessed = [];

  var guessesLeft = 9;
//win orlose
  var wins = 0;
  var losses = 0;

//remaining Guesses
  var updateRemainingGuesses = function() {
     document.querySelector("#guesses-left").innerHTML = guessesLeft;
  };

//updates the letter which computer guessing by Math.Random function
  var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  };

//updates the guess lefft so far
  var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = lettersGuessed.join(", ");
  };

//resets the guesses
  var reset = function() {
    guessesLeft = 9;
    lettersGuessed = [];
    updateLetterToGuess();
    updateRemainingGuesses();
    updateGuessesSoFar();
  };

//run
  updateLetterToGuess();
  updateRemainingGuesses();

//recording keyboard keys pressed on keyboard
  document.onkeyup = function(event) {
    guessesLeft--;

    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    lettersGuessed.push(letter);

    updateRemainingGuesses();
    updateGuessesSoFar();

//if guessed the right letter then update the win 
    if (letter === letterToGuess) {

      wins++;
      document.querySelector("#wins").innerHTML = wins;

      reset();
    }

//if out of guesses then update the HTML to lose 
   if (guessesLeft === 0) {

      losses++;
      document.querySelector("#losses").innerHTML = losses;

      reset();
    }
  };
