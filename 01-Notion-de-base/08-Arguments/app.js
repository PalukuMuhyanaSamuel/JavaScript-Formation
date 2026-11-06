function addition() {
  let somme = 0;

  for (let i = 0; i < arguments.length; i++) {
    somme += arguments[i];
  }
  return somme;
}

let resultat1 = addition(2, 3, 5);
let resultat2 = addition(1, 2, 3, 4, 5);

console.log(resultat1);
console.log(resultat2);
