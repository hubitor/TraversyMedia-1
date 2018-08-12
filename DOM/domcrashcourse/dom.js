//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.firstChild);
//console.log(document.body);
//console.log(document.head);

//document.title = 123;
//document.title = "Zabina";

//GIVES HTML COLLECTION - ARRAY-LIKE STYLE WHICH ENABLES TO ACCESS THE ELEMENTS WITH INDEXES
//console.log(document.all);
//console.log(document.all[10]);

//CHANGES TEXT CONTENT OF THE SELECTED ELEMENT - but don't do this as the index may change after you add an element to the body
//document.all[10].textContent = "Hello";

//console.log(document.forms);
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);




// SELECTORS - TO QUERY THE DOM

// getElementById start------------------------------------------

//console.log(document.getElementById('header-title'));
// GIVES THE SAME RESULT AS:
/*var headerTitle = document.getElementById('header-title');
console.log(headerTitle);*/


//CHANGING THE CONTENT        (OF H1 WITH ID 'header-title')
/*
- textContent - changes text
- innerText - changes text and takes the style into account
- innerHTML - allows to insert a new tag
*/
/*var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = "Hello";*/
// GIVES THE SAME RESULT AS:
/*var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.innerText = "Hello";*/
/*
APPLY THIS WITH THE ABOVE COMMENTED-OUT textContent and innerText !!!
the difference between the two is that innerText pays attention to the style of an element (here: after adding <span> tag with the attribute style="display:none")*/
/*var headerTitle = document.getElementById('header-title');
console.log(headerTitle);*/
// 1. the log below still displays what's in the <span> too ("Item Lister by Zabina")
//console.log(headerTitle.textContent);
// 2. the log below displays only ("Item Lister") - so it takes style of the element (here: display:none) into account.
//console.log(headerTitle.innerText);

/* 
3. the example below shows that innerHTML allows to insert not only string / text but also a new HTML element - a tag.
and it's important to notice that it DOESN'T REMOVE h1 tag but inserts h3 tag into it.
*/
/*
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.innerHTML = "<h3>Hello</h3>";
*/


//CHANGING THE STYLE              (OF HEADER WITH ID 'main-header')
/*
1. select an element (here: header)
2. use (here: .style.) property/selector
3. choose which css property you want to change (here: borderBottom) - remember to use camelCase
*/
/*
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 5px orange';
*/
// getElementById stop------------------------------------------

// getElementsByClassName start------------------------------------------
/*var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello2";
items[1].style.color = 'red';*/
/*
the one below ain't gonna work
items.style.backgroundColor = "yellow";
*/
/*
to change all the items we need to loop through the whole HTML collection
var items = document.getElementsByClassName('list-group-item');
for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "yellow";
}
*/
// getElementsByClassName stop------------------------------------------

// getElementsByTagName start------------------------------------------
/*
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[2]);
li[2].textContent = "whoa";
li[3].style.fontWeight = "bold";

for(var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "orange";
}
*/
// getElementsByTagName stop------------------------------------------

// querySelector start------------------------------------------
//use to choose ONLY ONE ITEM - THE FIRST ONE in the group
//can use any css selector, tag, id, class
/*
var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 5px orange";

var input = document.querySelector("input");
input.value = "Zabina";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector(".list-group-item");
item.style.color = "orange";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "lightgreen";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "lightblue";
*/
// querySelector stop------------------------------------------

// querySelectorAll start------------------------------------------
var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for(var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "orange";
    even[i].style.backgroundColor = "lightgray";
}
// querySelectorAll stop------------------------------------------
