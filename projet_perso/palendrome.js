function inverseMot(mot) {
  let array = mot.split("");
  array.reverse();
  return array.join("");
}

function palendrome(mot) {
  return mot.toLowerCase() === inverseMot(mot).toLowerCase();
}
console.log(palendrome("laval"));
