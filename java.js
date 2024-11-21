let choices = ["rock", "paper", "scissor"]
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")
const score = document.createElement("div")


const display = document.createElement("div")

rock.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    display.textContent = playRound("rock", computerChoice)
    document.body.appendChild(display)
})

paper.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    display.textContent = playRound("paper", computerChoice)
    document.body.appendChild(display)
})

scissor.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    display.textContent = playRound("scissor", computerChoice)
    document.body.appendChild(display)
})





function getComputerChoice(){
    let random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

function lowerCase(word){
    let newStr = ""
    for(i=0; i < word.length; i++){
        let char = word[i]
        newStr += char.toLowerCase()
    }

    return newStr
}

function getHumanChoice(){
    let userInput = lowerCase(prompt("Please enter your choice: "))
    while(choices.includes(userInput) !== true){
        userInput = lowerCase(prompt("Please enter your choice: "))
    }

    return userInput
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    let display = ""
    let playerWin = `You win! ${humanChoice} beats ${computerChoice}`
    let computerWin = `You lose! ${computerChoice} beats ${humanChoice}`
    let draw = `Its a draw. ${humanChoice} - ${computerChoice}`
    if(humanChoice !== computerChoice){
        if((humanChoice === "scissor") && (computerChoice === "paper") ){
            display += playerWin
            humanScore += 1
        }else if((humanChoice === "paper") && (computerChoice === "rock")) {
            display += playerWin
            humanScore += 1

        }else if((humanChoice === "rock") && (computerChoice === "scissor")){
            display += playerWin
            humanScore += 1
        } else {
            display += computerWin
            computerScore += 1
        }
    }else{
        display += draw
    }
    return display
    
}



score.textContent = `${humanScore} : ${computerScore}`
document.body.appendChild(score)

    
function playGame(){
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    prompt(`${humanScore} : ${computerScore}`)
    
    
}


