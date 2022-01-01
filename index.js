
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
        console.log('Computer Wins with Paper')
    } else if (player === 'scissors' && computer === 'Rock') {
        console.log('Computer wins with Rock')
    } else if (player === 'paper' && computer === 'Scissors') {
        console.log('Computer wins with Scissors')
    } else {
        console.log(`Player wins with ${player}`)
    }

    console.log(`Player: ${player}, Computer: ${computer}`)
}

