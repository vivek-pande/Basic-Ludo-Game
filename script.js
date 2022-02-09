var count = 1;

let diceRollout = function () {
  if (count === 1) {
    player1.classList.remove("noColor");
    player1.classList.add("colorChange");
    player2.classList.add("noColor");

    let diceNumber = Math.floor(Math.random() * 10);
    while (diceNumber >= 7 || diceNumber == 0) {
      diceNumber = Math.floor(Math.random() * 10);
    }

    btn.innerHTML = diceNumber;

    let score = diceNumber;

    if (score === 6) {
      digit1.innerHTML = Math.floor(10 + Math.floor(digit1.innerHTML));
    }
    if (digit1.innerHTML == 50) {
      btn.removeEventListener("click", diceRollout);
      return alert("player-1 wins");
    }
    console.log("count :>> ", count);
    return (count = 2);
  }

  if (count === 2) {
    player2.classList.remove("noColor");
    player2.classList.add("colorChange");
    player1.classList.add("noColor");

    let diceNumber = Math.floor(Math.random() * 10);
    while (diceNumber >= 7 || diceNumber == 0) {
      diceNumber = Math.floor(Math.random() * 10);
    }

    btn.innerHTML = diceNumber;

    let score = diceNumber;

    if (score === 6) {
      digit2.innerHTML = Math.floor(10 + Math.floor(digit2.innerHTML));
    }

    if (digit2.innerHTML == 50) {
      btn.removeEventListener("click", diceRollout);
      return alert("player-2 wins");
    }
    console.log("count :>> ", count);
    return (count = 1);
  }

  //   let rem=function(){
  //       btn.removeEventListener("click", diceRollout)
  //   }
  //   timeout=setTimeout(rem,1000)
};

let btn = document.querySelector(".btn");
let digit1 = document.querySelector(".digit1");
let digit2 = document.querySelector(".digit2");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");

btn.addEventListener("click", diceRollout);
// let y=diceRollout()
