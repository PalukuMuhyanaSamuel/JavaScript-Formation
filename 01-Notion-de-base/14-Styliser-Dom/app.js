// 1. Sélection des éléments (Assurez-vous que ces classes existent en HTML)
const str1 = document.querySelector(".str1");
const str2 = document.querySelector(".str2");
const box = document.querySelector(".box");
const list = document.querySelector(".list"); // Nom correct
const img = document.querySelector("img");
const cont = document.querySelector(".cont");
const cont2 = document.querySelector(".cont2");
const btn = document.querySelector(".btn");

// 2. Modification du contenu

str1.textContent = "Je suis du texte depuis Js";
str2.innerText = "Hello depuis Js";
box.innerHTML = `<p> Hello </p>`;

// 3. Création et ajout du nouvel élément LI

const newEl = document.createElement("li");
newEl.innerText = "Je suis un nouvel li";
list.appendChild(newEl);

list.children[0].replaceWith(newEl);

img.src =
  "https://images.unsplash.com/photo-1505762924203-b085ebd0c5ee?w=262&dpr=2&h=112&auto=format&fit=crop&q=60&ixlib=rb-4.1.0";

if (cont) {
  cont.style.background = "red";
}

cont2.className = "bor";

cont.classList.add("bor");
cont.classList.remove("bor");

btn.addEventListener("click", () => {
  cont.classList.toggle("bor");
});

const element = document.querySelector(".boxEl");
element.setAttribute("class", "new-class");
