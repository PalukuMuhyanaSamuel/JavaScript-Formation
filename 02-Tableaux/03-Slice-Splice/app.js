// slice : fait une copie du tableau en excluant cetains element ou non

let tab = ["pomme", "banane", "kiwi", "orange", "mangue"];
// let portion = tab.slice(1, 4);

// console.log(portion);
// console.log(tab.slice());

// splice : supprime un ou plusieurs elemnts du tableau a partir d'un
// indice en presisant le nomrbres d'element a supprimer et peut ajouter les element a un tableau !

let elementSupprimer = tab.splice(2, 0, "ananas");
console.log(elementSupprimer);
console.log(tab);
