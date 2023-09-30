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

$(document).ready(function () {
    // Select all game cards
    var gameCards = $(".game");

    // Add a click event listener to each game card
    gameCards.each(function () {
        $(this).click(function () {
            // Check if the game details are already loaded
            if ($(this).find(".game-details").is(":empty")) {
                // Get the game title
                var gameTitle = $(this).find("h3").text();

                // Send an AJAX request to fetch game details
                $.ajax({
                    url: "game-details.php", // Replace with the actual URL of your server-side script
                    type: "GET",
                    data: { title: gameTitle },
                    success: function (data) {
                        // Update the game details in the card
                        $(this).find(".game-details").html(data);
                    }.bind(this), // Ensure 'this' refers to the clicked game card
                    error: function () {
                        alert("Failed to fetch game details.");
                    },
                });
            }
        });
    });
});

