const str = "Bonjour tout le monde";
const newstr = str.replace("monde", "sam");
console.log(newstr);

const str2 = "ABC ABC ABC";
const newstr2 = str2.replace(/ABC/g, "XYZ");
console.log(newstr2);

const str3 = "Hello, world";
const newstr3 = str3.replace("world", function (match) {
  return match.toUpperCase();
});
console.log(newstr3);
