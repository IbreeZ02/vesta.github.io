const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

themeToggle.addEventListener("change", () => {
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");
});
