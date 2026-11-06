function compterVoyelle(mot) {
  let compteur = 0;
  for (let i = 0; i < mot.length; i++) {
    if (
      mot[i] == "a" ||
      mot[i] == "e" ||
      mot[i] == "i" ||
      mot[i] == "o" ||
      mot[i] == "u" ||
      mot[i] == "y"
    ) {
      compteur += 1;
    }
  }
  return compteur;
}

console.log(compterVoyelle("bonjour"));

function compterVoyelle1(mot) {
  let compteur = 0;
  let voyelle = ["a", "e", "i", "o", "u", "y"];
  for (let i = 0; i < mot.length; i++) {
    if (voyelle.includes(mot[i].toLowerCase())) {
      compteur += 1;
    }
  }
  return compteur;
}

console.log(compterVoyelle1("bOnjoUr"));
