function inverseMot(mot) {
  let array = mot.split("");
  array.reverse();
  return array.join("");
}

console.log(inverseMot("samuel"));

function inverse(mot) {
  let resultat = "";
  for (let i = mot.length - 1; i >= 0; i--) {
    resultat += mot[i];
  }
  return resultat;
}

console.log(inverse("bonjour"));
