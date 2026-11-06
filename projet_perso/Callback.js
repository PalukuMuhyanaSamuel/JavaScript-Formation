function direBonjour() {
  console.log("Bonjour !");
}

const executerTroisFois = (fonction) => {
  for (let index = 0; index < 3; index++) {
    fonction();
  }
};

executerTroisFois(direBonjour);
