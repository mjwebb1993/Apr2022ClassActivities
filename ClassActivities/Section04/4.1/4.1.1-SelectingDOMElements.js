// select all unordered list (ul) elements

console.log("All UL tags ... ", document.getElementsByTagName("ul"));
console.log(document.querySelectorAll("ul"));

// select all elements with the class "class-week"

console.log(
  "All class-week class names ... ",
  document.querySelectorAll(".class-week")
);
console.log(document.getElementsByClassName("class-week"));

// select all elements with the class "nav-bar"

console.log("Nav-Bar element 0 ... ", document.querySelectorAll(".nav-bar")[0]);
console.log(document.getElementsByClassName("nav-bar"));

// select the element with the id "dog-picture" and save it to a variable

const dogPicHTML = document.querySelector("#dog-picture");
console.log("Dog picture ... ", dogPicHTML);
