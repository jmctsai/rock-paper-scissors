let playerScore = 0
let computerScore = 0

function computerPlay() {
	plays = ['Rock', 'Paper', 'Scissors']
	return plays[Math.floor(Math.random() * 3)]
}

function playerPlay() {
	let playerMove = prompt('Please enter your move: rock, paper, scissors')
	let move = playerMove.toLowerCase()
	if (move == 'rock' || move == 'paper' || move == 'scissors') {
		return move
	} else {
		console.log(
			`${move}: is NOT a valid move, please enter 'rock', 'paper', or 'scissors'`
		)
		playerPlay()
	}
}

function playRound(playerSelection, computerSelection) {
	computerSelection = computerSelection.toLowerCase()
	console.log('Computer Move:', computerSelection)
	console.log('Player   Move:', playerSelection)

	//Tie condition
	if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
		return `It's a Tie!`
	}
	//Player Lose condition
	if (
		(computerSelection == 'paper' && playerSelection == 'rock') ||
		(computerSelection == 'scissors' && playerSelection == 'paper') ||
		(computerSelection == 'rock' && playerSelection == 'scissors')
	) {
		computerScore++
		return `You Lose! ${
			computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
		} beats ${
			playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
		}`
	}
	//Player Win condition
	if (
		(computerSelection == 'rock' && playerSelection == 'paper') ||
		(computerSelection == 'paper' && playerSelection == 'scissors') ||
		(computerSelection == 'scissors' && playerSelection == 'rock')
	) {
		playerScore++
		return `You Win! ${
			playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
		} beats ${
			computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
		}`
	}
}

function game() {
	while (!isGameOver()) {
		const playerSelection = playerPlay()
		const computerSelection = computerPlay()
		console.log(playRound(playerSelection, computerSelection))
		console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
		if (isGameOver()) {
			let winner = determineWinner()
			console.log(`GAME OVER! ${winner} wins!`)
		}
	}
}

function isGameOver() {
	return playerScore == 5 || computerScore == 5
}

function determineWinner() {
	if (playerScore > computerScore) {
		return `Player`
	} else {
		return `Computer`
	}
}

game()
