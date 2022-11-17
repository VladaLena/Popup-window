const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".container__btn");
const popupEl = document.querySelector(".popup");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupEl.classList.add("active");
});

closeIconEl.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupEl.classList.remove("active");
});
