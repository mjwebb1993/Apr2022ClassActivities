// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");

// remove the paragraph element in the nav-bar
let navParagraph = document.querySelector(".nav-bar").firstElementChild;
navParagraph.remove();

// document.querySelector(".nav-bar > p").remove();

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);

// create two new list item (li) elements, and add some text to them
const listElementOne = document.createElement("li");
const listElementTwo = document.createElement("li");

listElementOne.textContent = "list string thingy";
listElementTwo.textContent = "add some flavor to your life smiley face";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listElementOne);
