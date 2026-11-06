const direBonjour = (nom) => {
  console.log(`Bonjour ${nom}`);
};

function debounce(fonction, delai) {
  let minuteur;

  return (...args) => {
    clearTimeout(minuteur);
    minuteur = setTimeout(() => fonction(...args), delai);
  };
}

const direBonjourDebounce = debounce(direBonjour, 2000);

direBonjourDebounce("sam");
direBonjourDebounce("samuel");
direBonjourDebounce("alice");
