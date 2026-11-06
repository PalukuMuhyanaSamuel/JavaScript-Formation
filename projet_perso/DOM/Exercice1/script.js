const titre = document.querySelector("#titre");
const plus = document.querySelector("#plus");
const moins = document.querySelector("#moins");
const resset = document.querySelector("#reset");
const champ = document.querySelector("#champ");
const apercu = document.querySelector("#apercu");
let compteur = 0;

const afficher = () => {
  titre.textContent = `Compteur : ${compteur}`;
};

plus.addEventListener("click", () => {
  compteur += 1;
  afficher();
});

moins.addEventListener("click", () => {
  if (compteur > 0) {
    compteur -= 1;
    afficher();
  }
});

resset.addEventListener("click", () => {
  compteur = 0;
  afficher();
});

champ.addEventListener("input", (event) => {
  apercu.textContent = `${event.target.value}`;
});

champ.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    champ.value = "";
    apercu.textContent = "";
  }
});

// <=== NOTE ====>
// titre.textContent = "Nouveau titre";       // change le texte
// titre.style.color = "red";                 // change le style
// titre.classList.add("actif");              // ajoute une classe CSS
// titre.classList.toggle("actif");           // ajoute si absente, retire si présente

// champ.addEventListener("input", (event) => {
//   console.log(event.target.value); // le texte actuellement dans le champ
// });
