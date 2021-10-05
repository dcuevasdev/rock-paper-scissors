const options = ["Rock", "Paper", "Scissors"];
let optionPlayer;

const randomHouse = () => {
  return Math.floor(Math.random() * options.length);
};

function onclickPaper() {
  const valuePaper = document.getElementById("buttonPaper");
  optionPlayer = valuePaper.value;

  const optionHouse = randomHouse();

  game(optionHouse, optionPlayer);
}

function onclickScissors() {
  const valueScissors = document.getElementById("buttonScissors");
  optionPlayer = valueScissors.value;

  const optionHouse = randomHouse();

  game(optionHouse, optionPlayer);
}

function onclickRock() {
  const valueRock = document.getElementById("buttonRock");
  optionPlayer = valueRock.value;

  const optionHouse = randomHouse();

  game(optionHouse, optionPlayer);
}

function game(optionHouse, optionPlayer) {
  if (
    (options[optionHouse] == "Rock" && optionPlayer == "Paper") ||
    (options[optionHouse] == "Paper" && optionPlayer == "Scissors") ||
    (options[optionHouse] == "Scissors" && optionPlayer == "Rock")
  ) {
    const result__game = document.getElementById("result__text");
    result__game.innerText = `Player: ${optionPlayer} VS House: ${options[optionHouse]}  Win Player `;
  } else if (
    (options[optionHouse] == "Paper" && optionPlayer == "Rock") ||
    (options[optionHouse] == "Scissors" && optionPlayer == "Paper") ||
    (options[optionHouse] == "Rock" && optionPlayer == "Scissors")
  ) {
    const result__game = document.getElementById("result__text");
    result__game.innerText = `Player: ${optionPlayer} VS House: ${options[optionHouse]} Win House`;
  } else {
    const result__game = document.getElementById("result__text");
    result__game.innerText = `Player: ${optionPlayer} VS House: ${options[optionHouse]} It's a tie`;
  }
}
