let nb = 0;
if (nb > 0) {
  console.log("le nombre est positif");
} else if (nb < 0) {
  console.log("le nombre est negatif");
} else {
  console.log("Le nombre est zero");
}

let age = 25;
let sexe = "homme";

if (age >= 25) {
  if (sexe === "homme") {
    console.log("Vous ete un homme adulte");
  } else {
    console.log("Vous etes une femme adulte");
  }
} else {
  console.log("Vous ete mineur");
}
