let nb = [1, 2, 3, 4, 5];
let sum = nb.reduce(function (accumulator, currentvalue) {
  return accumulator + currentvalue;
}, 0);

console.log(sum);

let words = ["hello", " ", "world", "!"];
let message = words.reduce(function (accumulator, currentvalue) {
  return accumulator + currentvalue;
}, "");

console.log(message);
