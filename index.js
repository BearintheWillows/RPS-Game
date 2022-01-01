

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    
    switch (num) {
        case 0:
            console.log("Rock")
            break;
        case 1:
            console.log("Paper")
            break;
        case 2: 
            console.log("Scissors")
            break;
        default:
            break;
    }
}

function humanPlay() {
    readline.question(`Enter Choice:`, choice => {
        console.log(`User entered ${choice}`)
        readline.close()
      })
}

function playGame() {
    humanPlay()
    .then(computerPlay())
    .catch(failureCallbackfunction)
}

playGame()