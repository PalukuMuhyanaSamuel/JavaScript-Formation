function simulerAppelAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Voici les donnees");
    }, 2000); //
  });
}

function simulerAppelAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let succes = Math.random() > 0.5;
      if (succes) {
        resolve("ça a marché");
      } else {
        reject("ça a échoué");
      }
    }, 2000);
  });
}

simulerAppelAPI1()
  .then((donnee) => {
    console.log("Succès :", donnee);
  })
  .catch((erreur) => {
    console.log("Échec :", erreur);
  });
