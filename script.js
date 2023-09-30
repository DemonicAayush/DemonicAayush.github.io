// JavaScript code to open a pop-up on hover
const gameItems = document.querySelectorAll(".game");

// Remove the click event listener
gameItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // You can add code to display more details about the game in a pop-up here
    const gameDetails = item.querySelector(".game-details");
    if (gameDetails) {
      gameDetails.style.display = "block";
    }
  });

  item.addEventListener("mouseout", () => {
    const gameDetails = item.querySelector(".game-details");
    if (gameDetails) {
      gameDetails.style.display = "none";
    }
  });
});

