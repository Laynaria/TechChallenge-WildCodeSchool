/*----------------------------------------------------------------------
Treasure Gold Clicker DELUXE Edition v0.000000000000000000000001
----------------------------------------------------------------------*/
const treasure = document.querySelector("#Treasure");
const clickerChest = document.querySelector("#Treasure-click");
const counterDisplay = document.querySelector("#Counter");
const timeDisplay = document.querySelector("#Time-Display");
const resultDisplay = document.querySelector("#Result-Display");
const bestScoreDisplay = document.querySelector("#Best-Score-Display");

let clickerHeight = 0;
let clickerWidth = 0;

let timeCounter = 10;
let Counter = 0;
let bestScore = 0;

let autoStop;

timeDisplay.textContent = "10 seconds remaining!";
resultDisplay.textContent = "You got " + Counter + " Iari this run!";
bestScoreDisplay.textContent = "Your max Iari was: " + bestScore;

let timeCounted = () => {
  if (timeCounter > 0) {
    timeCounter--;
    timeDisplay.textContent = timeCounter + " seconds remaining!";
  } else if (timeCounter == 0) {
    clearInterval(autoStop);
    if (bestScore <= Counter) {
      bestScore = Counter;
      bestScoreDisplay.textContent = "Your max Iari was: " + bestScore;
    }
    resultDisplay.textContent = "You got " + Counter + " Iari this run!";
    Counter = 0;
    timeCounter = 10;
    timeDisplay.textContent = timeCounter + " seconds remaining!";
  }
};

clickerChest.addEventListener("click", (e) => {
  clickerHeight = e.target.offsetTop + e.target.clientHeight / 2.32;
  clickerWidth = e.target.offsetLeft + e.target.clientWidth / 2;

  if (timeCounter >= 0) {
    const goldCoin = document.createElement("span");
    let goldRandom = Math.random() * 150;

    if (goldRandom >= 0 && goldRandom <= 20) {
      goldCoin.classList.add("gold-coin-a");
    } else if (goldRandom > 25 && goldRandom <= 50) {
      goldCoin.classList.add("gold-coin-b");
    } else if (goldRandom > 50 && goldRandom <= 75) {
      goldCoin.classList.add("gold-coin-c");
    } else if (goldRandom > 75 && goldRandom <= 100) {
      goldCoin.classList.add("gold-coin-d");
    } else if (goldRandom > 100 && goldRandom <= 125) {
      goldCoin.classList.add("gold-coin-e");
    } else if (goldRandom > 125 && goldRandom <= 150) {
      goldCoin.classList.add("gold-coin-e");
    }

    treasure.appendChild(goldCoin);

    const size = 65 + "px";
    goldCoin.style.height = size;
    goldCoin.style.width = size;

    goldCoin.style.top = Math.random() * -75 + clickerHeight + "px";
    goldCoin.style.left = Math.random() * -100 + clickerWidth + "px";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    goldCoin.style.setProperty("--top", clickerHeight - 1650 + "px");
    goldCoin.style.setProperty(
      "--left",
      Math.random() * 60 * plusMinus + 20 + "%"
    );

    setTimeout(() => {
      goldCoin.remove();
    }, 1300);

    Counter++;
    counterDisplay.textContent = Counter;

    if (timeCounter == 10) {
      timeCounter--;
      timeDisplay.textContent = timeCounter + " seconds remaining!";
      autoStop = setInterval(timeCounted, 1000);
    }
  }
});
