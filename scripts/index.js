const options = ["Rock", "Paper", "Scissors"];
const optionHouse = Math.floor(Math.random() * options.length);
const optionPlayer = Math.floor(Math.random() * options.length);

if (
  (options[optionHouse] == "Rock" && options[optionPlayer] == "Paper") ||
  (options[optionHouse] == "Paper" && options[optionPlayer] == "Scissors") ||
  (options[optionHouse] == "Scissors" && options[optionPlayer] == "Rock")
) {
  console.log("player");
  document.write(
    `Player: ${options[optionPlayer]} VS House: ${options[optionHouse]} <br/> Win Player`
  );
} else if (
  (options[optionHouse] == "Paper" && options[optionPlayer] == "Rock") ||
  (options[optionHouse] == "Scissors" && options[optionPlayer] == "Paper") ||
  (options[optionHouse] == "Rock" && options[optionPlayer] == "Scissors")
) {
  console.log("House");
  document.write(
    `Player: ${options[optionPlayer]} VS House: ${options[optionHouse]} <br/> Win House`
  );
} else {
  document.write(
    `Player: ${options[optionPlayer]} VS House: ${options[optionHouse]} <br/> It's a tie`
  );
}
