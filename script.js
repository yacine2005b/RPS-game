const handOptions = {
  rock: "./images/Rock.png",
  paper: "./images/Paper.png",
  scissor: "./images/Scissors.png",
};
let SCORE = 0;

const pickUserHand = (Hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let result = document.querySelector(".result");
  result.style.display = "flex";

  document.getElementById("userPick").src = handOptions[Hand];
  pickComputerHand(Hand);
};

const pickComputerHand = (Hand) => {
  let hands = ["rock", "paper", "scissor"];
  let pcHand = hands[Math.floor(Math.random() * 3)];

  document.getElementById("computerPick").src = handOptions[pcHand];
  referee(Hand, pcHand);
};
const referee = (userHand, pcHand) => {
  let userWins = false;
  if (userHand == "paper" && pcHand == "scissor") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "paper" && pcHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    userWins = true;
  }
  if (userHand == "paper" && pcHand == "paper") {
    setDecision("NO WINNER!");
  }
  if (userHand == "rock" && pcHand == "scissor") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    userWins = true;
  }
  if (userHand == "rock" && pcHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "rock" && pcHand == "rock") {
    setDecision("NO WINNER!");
  }
  if (userHand == "scissor" && pcHand == "scissor") {
    setDecision("NO WINNER!");
  }
  if (userHand == "scissor" && pcHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissor" && pcHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    userWins = true;
  }
  handleWinnerClass(userWins);
};

const restartGame = () => {
  let result = document.querySelector(".result");
  result.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
};
const handleWinnerClass = (userWins) => {
  const userImg = document.getElementById("userPick");
  const computerImg = document.getElementById("computerPick");

  if (userWins) {
    userImg.classList.add("winner");
    computerImg.classList.remove("winner");
  } else {
    userImg.classList.remove("winner");
    computerImg.classList.add("winner");
  }
};
let rulesBtn = document.getElementById("rulesBtn");
let rulesContainer = document.getElementById("rulesContainer");
let CloseBtn = document.getElementById("closeBtn");

rulesBtn.addEventListener("click", () => {
  rulesContainer.style.display = "block";
});
CloseBtn.addEventListener("click", () => {
  rulesContainer.style.display = "none";
});
