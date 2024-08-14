// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Function to play the game
function playGame() {
    const playerChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${playerChoice}\nComputer chose: ${computerChoice}`);
    console.log(determineWinner(playerChoice, computerChoice));
    
}

// Start the game
playGame();
