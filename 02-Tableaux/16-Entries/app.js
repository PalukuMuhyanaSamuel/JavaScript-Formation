const map = new Map();
map.set("fruit", "apple");
map.set("color", "red");

const entries = map.entries();
console.log([...entries]);

const tab = ["pomme", "banane", "orange"];
const entries2 = tab.entries();

console.log([...entries2]);
