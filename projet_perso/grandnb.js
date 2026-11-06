function grandnb(tab) {
  let grand = tab[0];
  for (let i = 0; i <= tab.length - 1; i++) {
    if (tab[i] >= grand) {
      grand = tab[i];
    }
  }
  return grand;
}

console.log(grandnb([-5, -2, -10]));
