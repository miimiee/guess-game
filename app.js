"use strict";
// document.querySelector(".message").textContent;
// document.querySelector(".message").textContent = "correct message"
// document.querySelector(".number").textContent= 13;
// document.querySelector(".score").textContent = "10"

// document.querySelector(".guess").value=23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;


const displayMessage = function (message) { 
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    console.log((document.querySelector(".message").textContent = "no number"));
  } else if (guess == secretNumber) {
    displayMessage("correct number")
    // document.querySelector(".message").textContent = "correct number!";

    document.querySelector(".number").textContent = secretNumber;

    score = score + 1;
    document.querySelector(".score").textContent = score;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "15rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;  
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      
      displayMessage(guess > secretNumber ? "too high" : "too low");
      score--;
      document.querySelector(".score").textContent = score;
      // document.querySelector(".message").textContent = guess > secretNumber ? "too high" : "too low";
    } else {

      displayMessage ("you lost the game");
      // document.querySelector(".message").textContent = "you lost the game";
      // document.querySelector(".score").textContent = 0; 
    }
  }
  
  
  
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "too high!";
//       score = score - 1;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "you've lost the game!";
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "too low";
//       score = score - 1;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "you've lost the game!";
//     }
//   }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "9%";
});
