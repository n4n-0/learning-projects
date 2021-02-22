const modal = document.getElementById("myModal");
let computerSelection = "";
const loseMessage = [
  "You actually suck at this. The computer chose ",
  "Just give up... The computer chose ",
  "Why are you even still playing? The computer chose ",
  "Don't you have better things to do with your time? The computer chose ",
  "Don't you understand I am the superior here! The computer chose ",
  "Good thing the world doesnt depend on you winning a game huh? The computer chose ",
  "Want to go again? The computer chose ",
  "Imagine.. The computer chose ",
  "I woke this morning and chose violence! The computer chose ",
  "Just like that you lost again. The computer chose "
]

function startGame(selection) {
  let cheatChance = Math.floor(Math.random() * 10)
  if (cheatChance > 3) {
    cheatGame(selection);
  } else {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
      case 0:
        computerSelection = "Rock";
        break;
      case 1:
        computerSelection = "Paper";
        break;
      case 2:
        computerSelection = "Scissors";
        break;
    }
  }

  if (selection == computerSelection) {
    document.getElementById("endResult").innerHTML = "Draw";
    document.getElementById("endMessage").innerHTML = "This one is a draw. The computer chose " + computerSelection;
    modal.classList.add('modal-active');
    return
  } else if (selection == "Rock" && computerSelection == "Paper") {
    //alert(`You lost the computer chosed ${computerSelection}`);
    let lostMessage = loseMessage[Math.floor(Math.random() * loseMessage.length)];
    document.getElementById("endResult").innerHTML = "Loser";
    document.getElementById("endMessage").innerHTML = lostMessage + computerSelection;
    modal.classList.add('modal-active');
    return
  } else if (selection == "Paper" && computerSelection == "Scissors") {
    //alert(`You lost the computer chosed ${computerSelection}`);  
    let lostMessage = loseMessage[Math.floor(Math.random() * loseMessage.length)];
    document.getElementById("endResult").innerHTML = "Loser";
    document.getElementById("endMessage").innerHTML = lostMessage + computerSelection;
    modal.classList.add('modal-active');
    return
  } else if (selection == "Scissors" && computerSelection == "Rock") {
    //alert(`You lost the computer chosed ${computerSelection}`);
    let lostMessage = loseMessage[Math.floor(Math.random() * loseMessage.length)];
    document.getElementById("endResult").innerHTML = "Loser";
    document.getElementById("endMessage").innerHTML = lostMessage + computerSelection;
    modal.classList.add('modal-active');
    return
  } else {
    document.getElementById("endResult").innerHTML = "Winner";
    document.getElementById("endMessage").innerHTML = "Congratulations! You actually won one. The computer chose " + computerSelection;
    modal.classList.add('modal-active');
    return
  }
}

function cheatGame(selection) {
  switch (selection) {
    case "Rock":
      computerSelection = "Paper";
      break;
    case "Paper":
      computerSelection = "Scissors";
      break;
    case "Scissors":
      computerSelection = "Rock"
      break;
  }

  return computerSelection;
}

function closeModal() {
  modal.classList.remove('modal-active');
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('modal-active');
  }
}