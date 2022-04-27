// select the last child of the root node
console.log(document.querySelector("p").lastChild);

// select all the children of the body element
console.log(document.querySelector("p").children);

// select the next sibling of the h2 node
console.log(document.querySelector("h2").nextSibling);

// select the parent element of the h1 node
console.log(document.querySelector("h1").parentElement);

console.log("------------");

// select the root node
console.log("html", document.querySelector("html"));

// select the last child of the root node
console.log("last html child", document.querySelector("html").lastElementChild);

// select all the children of the body element
console.log("body children", document.querySelector("body").children);

// select the next sibling of the h2 node
console.log("h2 next sibling", document.querySelector("h2").nextElementSibling);

// select the parent element of the h1 node
console.log("h1 parent", document.querySelector("h1").parentElement);

// select the root node
const root = document.querySelector("html");

// select the last child of the root node
console.log(root.lastElementChild);

// select all the children of the body element
document.querySelector("body").children;

// select the next sibling of the h2 node
document.querySelector("h2").nextElementSibling;

// select the parent element of the h1 node
document.querySelector("h1").parentElement;
