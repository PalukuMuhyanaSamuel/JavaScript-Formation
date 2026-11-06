const tab = [1, 2, 3];
const valeurs = tab.values();

console.log(valeurs);

const valeur2 = tab.values();
for (const valeur of valeur2) {
  console.log(valeur);
}

const tabValeurs = Array.from(tab.values());
console.log(tabValeurs);
