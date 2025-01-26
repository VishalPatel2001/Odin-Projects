let computerScore = 0;
let humanScore = 0;
let currentRound = 0;

function getComputerChoice() {
    const rps = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * rps.length);
    const computerChoice = rps[randomIndex];
    console.log('Computer Choice: ' + computerChoice); // Output computer choice for clarity
    return computerChoice;
}

function getHumanChoice() {
    const validChoice = ['rock', 'paper', 'scissors'];
    while (true) {
        let humanChoice = prompt("Enter rock, paper, or scissors").toLowerCase();
        if (!validChoice.includes(humanChoice)) {
            alert("Error! Please enter rock, paper, or scissors.");
        } else {
            console.log('Human Choice: ' + humanChoice); // Output human choice for clarity
            return humanChoice;
        }
    }
}

function playRound(humanSelection, computerSelection) {
    console.log(`Human chose ${humanSelection}, Computer chose ${computerSelection}`);

    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log("Human wins this round!");
        humanScore += 1;
    } else {
        console.log("Computer wins this round!");
        computerScore += 1;
    }
}

function playGame(rounds) {
    while (currentRound < rounds) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score after round ${currentRound + 1}: Human ${humanScore} - Computer ${computerScore}`);
        currentRound += 1;
    }

    if (humanScore > computerScore) {
        console.log('Human Wins the Game!!');
    } else if (computerScore > humanScore) {
        console.log('Computer Wins the Game!!');
    } else {
        console.log('The Game is a Draw!!');
    }
}

playGame(5);
