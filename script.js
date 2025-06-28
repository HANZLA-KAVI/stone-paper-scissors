let userScoreElement = document.querySelector("#user-score");
let compScoreElement = document.querySelector("#Computer-score");
userScore = 0;
compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

// Draw condition
const draw = () => {
  console.log("game was draw !!");
  msg.innerText = "Match Was Draw ! Play Again..";
  msg.style.backgroundColor = "#081b31";
};

// show winner
const showwinner = (userwin, userChoice, compchoice) => {
  if (userwin === true) {
    msg.innerText = `You Win ! Your ${userChoice} Beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScoreElement.innerText = userScore;
  } else {
    msg.innerText = `You Loose !  ${compchoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScoreElement.innerText = compScore;
  }
};
// computer choice
const gameCompChoice = () => {
  const options = ["rock", "papper", "scissors"];
  const randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
};

// game play
const playgame = (userChoice) => {
  //user choice
  console.log("user choice = ", userChoice);
  //computer choice
  const compchoice = gameCompChoice();
  console.log("computer choice = ", compchoice);

  // winning conditions
  if (userChoice === compchoice) {
    draw();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      // papper , secciors
      userwin = compchoice === "papper" ? false : true;
    } else if (userChoice === "papper") {
      // rock , secciors
      userwin = compchoice === "rock" ? true : false;
    } else if (userChoice === "scissors") {
      // rock , papper
      userwin = compchoice === "rock" ? false : true;
    }

    showwinner(userwin, userChoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");

    playgame(userChoice);
  });
});
