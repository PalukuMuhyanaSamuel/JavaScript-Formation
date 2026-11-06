const btnToggle = document.querySelector(".btn-toggle-container");
const listNav = document.querySelector(".list-nav");

btnToggle.addEventListener("click", () => {
  listNav.classList.toggle("active");
});
