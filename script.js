const numButton = 3;
const buttonArray = [];



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
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${playerChoice}\nComputer chose: ${computerChoice}`);
    diplayWinner(determineWinner(playerChoice, computerChoice));
}


function diplayWinner(winner){
    let element = document.querySelector('.text');
    element.textContent = winner;
}

function createButton(){
    
    const buttonContainer = document.querySelector(".buttonContainer");

    for(let i = 0; i <numButton; i++){
        const button = document.createElement('button')
        let choice;
        if (i == 0){
            choice = "rock";
            button.innerText = "Rock"
            button.className = "Rock"
        }else if (i == 1){
            choice = "paper";
            button.innerText = "Paper"
            button.className = "Paper"
        } else{
            choice = "scissors";
            button.innerText = "Scissors"
            button.className = "Scissors"
        }
        button.addEventListener("click", () => playGame(choice));
        buttonContainer.appendChild(button);
        buttonArray.push(button);
    }
}

// Start the game
createButton();

