const tabButtons = document.querySelectorAll(".tabs button");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});


// Before / After sliders
const beforeAfterCards = document.querySelectorAll(".before-after-card");

beforeAfterCards.forEach((card) => {
  const slider = card.querySelector(".ba-range");

  slider.addEventListener("input", () => {
    card.style.setProperty("--position", slider.value + "%");
  });
});


