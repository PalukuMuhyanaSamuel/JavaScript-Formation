const retirerDoublon = (tableau1) => {
  let tableau2 = [];
  for (let i = 0; i <= tableau1.length - 1; i++) {
    if (!tableau2.includes(tableau1[i])) {
      tableau2.push(tableau1[i]);
    }
  }
  return tableau2;
};

console.log(retirerDoublon(["a", "b", "a", "c"]));

const retirerDoublon1 = (tableau1) => {
  return [...new Set(tableau1)];
};

console.log(retirerDoublon1([1, 2, 2, 3, 4, 4, 4, 5]));
