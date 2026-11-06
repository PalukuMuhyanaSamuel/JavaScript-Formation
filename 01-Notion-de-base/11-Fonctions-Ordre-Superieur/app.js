function appliquer(x, y, operation) {
  return operation(x, y);
}

function additionner(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

const resultat = appliquer(5, 3, additionner);
const resultat2 = appliquer(5, 3, mult);

console.log(resultat);
console.log(resultat2);
