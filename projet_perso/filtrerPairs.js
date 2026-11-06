const filtrerPairs = (tableau) => {
  let tableau1 = [];
  for (let index = 0; index < tableau.length; index++) {
    if (tableau[index] % 2 === 0) {
      tableau1.push(tableau[index]);
    }
  }
  return tableau1;
};

console.log(filtrerPairs([1, 2, 3, 4, 5, 6]));

const filtrerPairs1 = (tableau) => {
  return tableau.filter((num) => num % 2 === 0);
};

console.log(filtrerPairs1([1, 2, 3, 4, 5, 6]));
