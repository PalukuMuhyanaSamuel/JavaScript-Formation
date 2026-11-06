const parentElement = document.getElementById("parent");
const currentElement = document.getElementById("current");

const childrenElements = parentElement.children;
console.log(childrenElements);

const childNodes = parentElement.childNodes;
console.log(childNodes);

const childElement = document.getElementById("child");
const parentElement2 = childElement.parentElement;

console.log(parentElement2);

const nextElementSibling = currentElement.nextElementSibling;
console.log(nextElementSibling);

const previousElementSibling = currentElement.previousElementSibling;
console.log(previousElementSibling);

const previousSibling = currentElement.previousSibling;
console.log(previousSibling);

const lastElement = parentElement.lastElementChild;
console.log(lastElement);

const firstElement = parentElement.firstElementChild;
console.log(firstElement);
