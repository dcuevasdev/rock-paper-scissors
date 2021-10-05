const options = ["Rock", "Paper", "Scissors"];
let optionPlayer;

const randomHouse = () => {
  return Math.floor(Math.random() * options.length);
};

function onclickScissors() {
  const valueScissors = document.getElementById("buttonScissors");
  optionPlayer = valueScissors.value;

  const optionHouse = randomHouse();

  game(optionHouse, optionPlayer);
}

function game(optionHouse, optionPlayer) {
  if (
    (options[optionHouse] == "Rock" && optionPlayer == "Paper") ||
    (options[optionHouse] == "Paper" && optionPlayer == "Scissors") ||
    (options[optionHouse] == "Scissors" && optionPlayer == "Rock")
  ) {
    document.write(
      `Player: ${optionPlayer} VS House: ${options[optionHouse]} <strong> Win Player </strong> `
    );
  } else if (
    (options[optionHouse] == "Paper" && optionPlayer == "Rock") ||
    (options[optionHouse] == "Scissors" && optionPlayer == "Paper") ||
    (options[optionHouse] == "Rock" && optionPlayer == "Scissors")
  ) {
    document.write(
      `Player: ${optionPlayer} VS House: ${options[optionHouse]} Win House`
    );
  } else {
    document.write(
      `Player: ${optionPlayer} VS House: ${options[optionHouse]} It's a tie`
    );
  }
}
