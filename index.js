let playerScore = 0
let computerScore = 0
let round = 1

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    
    switch (num) {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2: 
            return "Scissors"
            break;
        default:
            break;
    }
}

function playGame () {
    let player = document.getElementById('text').value
    let computer = computerPlay()

   
    if (player === 'rock' && computer === 'Paper') {
        console.log(`Computer Wins round ${round} with Paper`)
        computerScore++
        round++
    } else if (player === 'scissors' && computer === 'Rock') {
        console.log(`Computer wins round ${round} with Rock`)
        computerScore++
        round++
    } else if (player === 'paper' && computer === 'Scissors') {
        console.log(`Computer wins round ${round} with Scissors`)
        computerScore++
        round++
    } else {
        console.log(`Player wins round ${round} with ${player}`)
        playerScore++
        round++
    }

    let results = () => {
        console.log(`Results:`)
        console.log(`Player: ${playerScore}`)
        console.log(`Computer: ${computerScore}`)
        round = 0
    }

    if (round === 6) {
        if (playerScore > computerScore) {
            console.log(`Player Wins!`)
            results()
        } else {
            console.log(`Computer Wins!`)
            results()
        }
    }
    
    

    console.log(`Player: ${player}, Computer: ${computer}`)
}

