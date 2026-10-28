
console.log("Developer Portfolio loaded successfully!");

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("Selected project:", card.querySelector("h3").textContent);
  });
});
