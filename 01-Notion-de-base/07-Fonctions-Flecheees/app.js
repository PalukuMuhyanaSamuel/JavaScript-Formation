const afficher = () => {
  console.log("bonjour");
};

afficher();

const addition = (a, b) => {
  return a + b;
};

console.log(addition(2, 4));

const multi = (a, b) => a * b;
console.log(multi(5, 5));

const afficherNom = (nom) => console.log(`Bonjour, ${nom}`);
afficherNom("SAM");

const obj = {
  nom: "Jonathan",
  myFunc: function () {
    console.log(`Je suis ${this.nom}`);
  },
  myFunc2: () => {
    console.log(`Je suis ${this.nom}`);
  },
};

obj.myFunc();
obj.myFunc2();
