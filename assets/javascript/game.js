//test to see if js is linked to html
//alert('test');

//GLOBAL VARIABLES
//========================================================================================

var crystal = {
  blue: {
    name: 'Blue',
    value: 0
  },
  red: {
    name: 'Red',
    value: 0
  },
  green: {
    name: 'Green',
    value: 0
  },
  orange: {
    name: 'Orange',
    value: 0
  }
};

//Scores (Cuurent & Target)
var currentScore = 0;
var targetScore = 0;

//Win and Loss Counter
var winCount = 0;
var lossCount = 0;

//FUNCTIONS
//========================================================================================

//Function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function() {
  // Reset the current score
  currentScore = 0;

  //Set a new Target score (between 19 and 120)

  // we can use the following to get the target score or we cn use the function get Random and just call the function
  // targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  targetScore = getRandom(19, 120);

  //Set different values for each crystal (between 1 and 12)
  crystal.blue.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.orange.value = getRandom(1, 12);

  //Testing
  console.log('Target Score: ', +targetScore);
  console.log('Blue Crystal Value: ' + crystal.blue.value);
  console.log('Red Crystal Value: ' + crystal.red.value);
  console.log('Green Crystal Value: ' + crystal.green.value);
  console.log('Orange Crystal Value: ' + crystal.orange.value);

  //change the html to reflect all of these changes
  $('#yourScore').html(currentScore);
  $('#targetScore').html(targetScore);
};
//function to add score and get yourScore
var addValues = function(crystal) {
  //changes current score
  currentScore = currentScore + crystal.value;

  //change html to reflect current score
  $('#yourScore').html(currentScore);

  //Testing
  console.log('Your Score: ' + currentScore);

  //execute the check win function
  checkWin();
};

var checkWin = function() {
  if (currentScore > targetScore) {
    alert('Sorry. You lost!');
    console.log('You lost!');
    //if loss adds to the loss count
    lossCount++;
    //returns the loss count to the html so that it is displayed
    $('#lossCount').html(lossCount);
    //restart game
    startGame();
  } else if (currentScore == targetScore) {
    alert('Congratulations. You WON!');
    console.log('You WON!');
    //if won adds to the win count
    winCount++;
    //returns the win count to the html so that it is displayed
    $('#winCount').html(winCount);
    //restart game
    startGame();
  }
};

//MAIN PROCESS
//========================================================================================

//starts the game the first time
startGame();

$('#blue').click(function() {
  // alert('test');
  addValues(crystal.blue);
});
$('#red').click(function() {
  // alert('test');
  addValues(crystal.red);
});
$('#green').click(function() {
  // alert('test');
  addValues(crystal.green);
});
$('#orange').click(function() {
  // alert('test');
  addValues(crystal.orange);
});
