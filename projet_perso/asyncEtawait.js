function simulerAppelAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Voici les donnees");
    }, 2000); //
  });
}

async function maFonction() {
  try {
    const resultat = await simulerAppelAPI();
    console.log("Succès :", resultat);
  } catch (erreur) {
    console.log("Échec :", erreur);
  }
}

maFonction();

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

// Version .then()/.catch() (exercice 12)
simulerAppelAPI1()
  .then((donnee) => console.log("Succès :", donnee))
  .catch((erreur) => console.log("Échec :", erreur));

// Version async/await (exercice 13)
async function testerAppel() {
  try {
    const resultat = await simulerAppelAPI1();
    console.log("Succès :", resultat);
  } catch (erreur) {
    console.log("Échec :", erreur);
  }
}

testerAppel();
