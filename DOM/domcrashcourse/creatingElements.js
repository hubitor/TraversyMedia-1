/*
// CREATE ELEMENT

var newDiv = document.createElement('div');
// adding class
newDiv.className = "hello";
// adding id
newDiv.id = "goodbye";
// adding attribute and its value
newDiv.setAttribute("title", "Hello Div");

// creating text node
var newDivText = document.createTextNode("Hello World");

// adding text to div
newDiv.appendChild(newDivText);

// inserting div into DOM
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
container.insertBefore(newDiv, h1);
console.log(newDiv);

// styling
newDiv.style.color = "orange";
*/