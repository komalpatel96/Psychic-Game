  var letters = ["o", "m", "g"];

  var lettersGuessed = [];

  var guessesLeft = 9;
//win orlose
  var wins = 0;
  var losses = 0;

//remaining Guesses
  var updateRemainingGuesses = function() {
     document.querySelector("#guesses-left").innerHTML = guessesLeft;
  };

  var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  };

  var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = lettersGuessed.join(", ");
  };

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

//recording keyboard keys
  document.onkeyup = function(event) {
    guessesLeft--;

    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    lettersGuessed.push(letter);

    updateRemainingGuesses();
    updateGuessesSoFar();


    if (letter === letterToGuess) {

      wins++;
      document.querySelector("#wins").innerHTML = wins;

      reset();
    }


   if (guessesLeft === 0) {

      losses++;
      document.querySelector("#losses").innerHTML = losses;

      reset();
    }
  };
