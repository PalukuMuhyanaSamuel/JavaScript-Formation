const sommeTab = (tableau) => {
  let compteur = 0;
  for (let i = 0; i < tableau.length; i++) {
    compteur += tableau[i];
  }
  return compteur;
};

const sommeTab1 = (tableau) => {
  return tableau.reduce((acc, val) => acc + val, 0);
};

console.log(sommeTab([1, 2, 3, 4]));
console.log(sommeTab1([1, 2, 3, 4]));
