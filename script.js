let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (guess, secretTarget) => {
  return Math.abs(secretTarget - guess);
};

const validateGuess = (userGuess, computerGuess) => {
  if (userGuess > 9) {
    return "Please select numbers between 0 and 9";
  }
  else if (userGuess == computerGuess) {
    return "TIED";
  }
  else{
      return true;
  }
};

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
  const userDiff = getAbsoluteDistance(userGuess, secretTarget);
  const computerDiff = getAbsoluteDistance(computerGuess, secretTarget);

  if (userDiff > computerDiff) {
    return false;
  } else if (computerDiff > userDiff) {
    return true;
  } else {
    return "TIED";
  }
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }else{
      alert('Tied');
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
