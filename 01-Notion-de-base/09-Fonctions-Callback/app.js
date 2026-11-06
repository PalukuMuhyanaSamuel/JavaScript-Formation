function effectuerTache(tache, callBack) {
  console.log(`Entrain d'effectuer la tache ${tache}`);
  callBack();
}

function afficher() {
  console.log("La tache est terminée");
}

effectuerTache("Netoyer la maison", afficher);
