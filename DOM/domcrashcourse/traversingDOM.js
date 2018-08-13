//PARENT NODE
/*
var itemList = document.querySelector("#items");
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "lime";

console.log(itemList.parentNode.parentNode);
*/

// PARENT ELEMENT - for the most part, interchangeable with parentNode
/*
var itemList = document.querySelector("#items");
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "lime";

console.log(itemList.parentElement.parentElement);
*/

// CHILD NODES - takes white space into account
/*
var itemList = document.querySelector("#items");
console.log(itemList.childNodes);
*/

// CHILDREN - shows only the elements, leaves out the white space
// returns an HTML COLLECTION
/*

var itemList = document.querySelector("#items");
console.log(itemList.children);
console.log(itemList.children[3]);
itemList.children[3].style.backgroundColor = "orange";
*/

// FIRST CHILD & LAST CHILD - take white space into account
// the log below returns text - which is a white space
/*
var itemList = document.querySelector("#items");
console.log(itemList.firstChild);
*/

// FIRST ELEMENT CHILD & LAST ELEMENT CHILD - show an element only, skips the white space
/*
var itemList = document.querySelector("#items");
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Start";
*/

// NEXT & PREVIOUS SIBLING - take white space into account
/*
var header = document.getElementById("main-header");
console.log(header.nextSibling);
*/

// NEXT  & PREVIOUS ELEMENT SIBLING - take elements only into account
/*
var header = document.getElementById("main-header");
console.log(header.nextElementSibling);
*/