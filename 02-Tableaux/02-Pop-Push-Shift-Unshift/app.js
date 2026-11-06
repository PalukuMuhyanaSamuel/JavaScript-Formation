// pop : permet de supprimer un element a partir de la fin

let fruits = ["pomme", "banane", "orange", "frez"];
let dernierFruit = fruits.pop();
console.log(dernierFruit);
console.log(fruits);

// Push : permet d'ajouter un ou plusieur elements a la fin du tableau

const animaux = ["chien", "chat"];
let nvLongueur = animaux.push("souris", "canard");
console.log(nvLongueur);
console.log(animaux);

// Shift : Supprime le premier element du tableau

const ville = ["paris", "Madrid", "Londres"];
let firstVille = ville.shift();
console.log(firstVille);
console.log(ville);

// Unshift : Ajouter un ou plusieurs elements au debut du tableau

let languages = ["css", "html", "Javascript"];
let nouvelLang = languages.unshift("Java", "C++");
console.log(nouvelLang);
console.log(languages);
