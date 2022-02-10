let btn = document.querySelector(".btn");
let digit1 = document.querySelector(".digit1");
let digit2 = document.querySelector(".digit2");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");

const assignPlayer = function (first, second) {
  second.classList.remove("noColor");
  second.classList.add("colorChange");
  first.classList.add("noColor");
};

let diceNumber = function (x, y) {
  return Math.floor(Math.random() * (y - x) + x);
};

let count = 1;

let diceRollout = function () {
  let diceValue = diceNumber(1, 7);
  console.log("diceValue :>> ", diceValue);

  btn.innerHTML = diceValue;

  let score = diceValue;

  if (count === 1) {
    assignPlayer(player2, player1);

    if (score === 6) {
      digit1.innerHTML = Math.floor(10 + Math.floor(digit1.innerHTML));
    }
    if (digit1.innerHTML == 50) {
      btn.removeEventListener("click", diceRollout);
      alert("player-1 wins");
      return;
    }
    console.log("count :>> ", count);
    count = 2;
    return;
  }

  if (count === 2) {
    assignPlayer(player1, player2);

    if (score === 6) {
      digit2.innerHTML = Math.floor(10 + Math.floor(digit2.innerHTML));
    }

    if (digit2.innerHTML == 50) {
      btn.removeEventListener("click", diceRollout);
      return alert("player-2 wins");
    }
    console.log("count :>> ", count);
    count = 1;
    return;
  }
};

btn.addEventListener("click", diceRollout);
