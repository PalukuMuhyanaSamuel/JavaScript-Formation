const personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 15 },
  { nom: "Claire", age: 40 },
];

// ordre croissant
const trierParAge = (tableau) => {
  return tableau.sort((a, b) => {
    return a.age - b.age;
  });
};

// ordre decroissant

const trierParAgeDec = (tableau) => {
  return tableau.sort((a, b) => {
    return b.age - a.age;
  });
};

console.log(trierParAge(personnes));
