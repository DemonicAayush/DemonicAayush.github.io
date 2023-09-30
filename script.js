document.addEventListener("DOMContentLoaded", function () {
  const killedGameItems = document.querySelectorAll(".killedGame");

  killedGameItems.forEach((item) => {
    createParticles(item);
  });
});

function createParticles(container) {
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    container.appendChild(particle);

    const size = Math.random() * 20 + 10;
    const duration = Math.random() * 2 + 1;
    const delay = Math.random() * 0.5;

    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.animation = `moveParticle ${duration}s ease-in-out ${delay}s infinite`;

    setTimeout(() => {
      container.removeChild(particle);
    }, duration * 1000);
  }
}

