let taches = [];
let prochainId = 1;

const ajouterTache = (titre) => {
  taches.push({ id: prochainId, titre: titre, faite: false });
  prochainId++;
};

const supprimerTache = (identifiant) => {
  taches = taches.filter(({ id }) => id !== identifiant);
};

const marquerFaite = (identifiant) => {
  for (let index = 0; index < taches.length; index++) {
    if (taches[index].id === identifiant) {
      taches[index].faite = true;
    }
  }
};

const afficherTaches = () => {
  for (let index = 0; index < taches.length; index++) {
    const tache = taches[index];
    console.log(`${tache.id}. ${tache.faite ? "[x]" : "[ ]"} ${tache.titre}`);
  }
};

ajouterTache("Apprendre JS");
ajouterTache("Apprendre TS");
ajouterTache("Apprendre python");
ajouterTache("Apprendre java");
marquerFaite(1);
supprimerTache(2);
ajouterTache("Apprendre html");
marquerFaite(2);
marquerFaite(4);
afficherTaches();

// Solution 2 : prendre le plus grand id existant + 1
// const ajouterTache = (titre) => {
//   const maxId = taches.length > 0 ? Math.max(...taches.map((t) => t.id)) : 0;
//   taches.push({ id: maxId + 1, titre: titre, faite: false });
// };

// Option B : garder const et modifier le tableau sur place avec splice
// const supprimerTache = (identifiant) => {
//   const index = taches.findIndex(({ id }) => id === identifiant);
//   if (index !== -1) {
//     taches.splice(index, 1); // retire 1 élément à partir de cet index
//   }
// };
