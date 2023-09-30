
// You can add interactive features or functionality here if needed


document.addEventListener("DOMContentLoaded", function () {
  const killedGameItems = document.querySelectorAll(".killedGame");

  killedGameItems.forEach((item, index) => {
    // Delay the animation for each item
    item.style.animation = `fadeIn 1s ${index * 0.3}s both`;
  });
});

