const str1 = "jonathan";
const str2 = "Clement";
const str3 = `Lorenzo, ${str1}`;

console.log(str3);
console.log(str1.charAt(4));
console.log(str1.includes("jon"));
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.indexOf("than"));
console.log(str1.slice(0, 4));
console.log(str1.split(" ").join());

const conc = str1.concat("abc", str2);
console.log(conc);

const text = "        la maison de fabien est vide         ";
console.log(text);
console.log(text.trim());
console.log(text.trimEnd());
console.log(text.trimStart());
