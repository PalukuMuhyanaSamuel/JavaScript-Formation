const personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 15 },
  { nom: "Claire", age: 18 },
  { nom: "David", age: 10 },
];

const nomsMajeurs = (tableau) => {
  let tableau1 = [];
  for (let index = 0; index < tableau.length; index++) {
    if (tableau[index].age >= 18) {
      tableau1.push(tableau[index].nom);
    }
  }
  return tableau1;
};

console.log(nomsMajeurs(personnes));

const nomsMajeurs1 = (tableau) => {
  let tableau1 = tableau.filter(({ age }) => age >= 18);
  return tableau1.map(({ nom }) => nom);
};

// const nomsMajeurs1 = (tableau) => {
//   let tableau1 = tableau.filter((personne) => personne.age >= 18);
//   return tableau1.map((personne) => personne.nom);
// };

console.log(nomsMajeurs1(personnes));
