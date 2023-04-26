function random() {
  return Math.floor(Math.random() * 6) + 1;
}

const playerOneImg = $(".playerOneImg");
const playerTwoImg = $(".playerTwoImg");
const mainHeading = $("h1");

function play() {
  let playerOneResult = random();
  let playerTwoResult = random();
  playerOneImg.attr("src", `images/dice${playerOneResult}.png`);
  playerTwoImg.attr("src", `images/dice${playerTwoResult}.png`);

  playerOneResult > playerTwoResult
    ? mainHeading.text("Player 1 won!")
    : playerTwoResult > playerOneResult
    ? mainHeading.text("Player 2 won!")
    : mainHeading.text("Draw!");
}

$(".start-btn").on("click", () => {
  play();
});
