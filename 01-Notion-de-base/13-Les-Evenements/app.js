const button = document.querySelector("button");
const box = document.querySelector(".box");
const form = document.querySelector("form");
const input = document.querySelector("input");

// function handleClick() {
//   console.log("Tu as cliquer sur le bouton");
// }
// button.addEventListener("click", handleClick);

// box.addEventListener("mouseleave", () => {
//   console.log("Tu as cliquer sur le bouton");
// });

input.addEventListener("input", () => {
  console.log("Tu ramplis");
});
