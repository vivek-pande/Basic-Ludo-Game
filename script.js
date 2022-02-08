let diceRollout = function () {
  let y = Math.floor(Math.random() * 10);
  //   console.log('y first :>> ', y);
  while (y >= 7 || y === 0) {
    y = Math.floor(Math.random() * 10);
    // console.log('y while :>> ', y );
  }

  btn.innerHTML = y;

  let x = y;

  if (x === 6) {
      digit1.innerHTML = 10;
      player1.classList.add("colorchange");
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
