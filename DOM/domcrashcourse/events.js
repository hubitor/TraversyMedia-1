// CLICK

/*var button = document.getElementById("button").addEventListener("click", function() {
    console.log(123);
});*/


// we'll get the same result using a named function:
/*var button = document.getElementById("button").addEventListener("click", buttonClick);

function buttonClick() {
    console.log("Button clicked");
}*/


/*var button = document.getElementById("button").addEventListener("click", buttonClick);

function buttonClick() {
    document.getElementById("header-title").textContent = "Wow !!!"
    document.querySelector("#main").style.backgroundColor = "orange";
}*/

/*var buttonClick = document.getElementById("button").addEventListener("click", buttonClick);

function buttonClick(g) {
    console.log(g.altKey);
    console.log(g.ctrlKey);
    console.log(g.shiftKey);
}*/


// TARGET
/*var button = document.getElementById("button").addEventListener("click", buttonClick);

function buttonClick(g) {
    console.log(g);
    console.log(g.target);
    console.log(g.target.classList);
    console.log(g.target.className);
    var output = document.getElementById("output");
    output.innerHTML = "<h3>"+ g.target.id +"</h3>";
}*/


// MOUSE EVENTS
//client - the position from the window
//offset - the position from the actual element
/*var button = document.getElementById("button").addEventListener("click", buttonClick);

function buttonClick(g) {
    console.log(g.clientX);
    console.log(g.offsetX);
    console.log(g.clientY);
    console.log(g.offsetY);
}*/


// EVENT TYPES
/*
WITH A MOUSE
- click
- dblclick
- mousedown
- mouseup
- mouseenter - only for the element itself/ the parent element (e.g. for the div)
- mouseleave
- mouseover - for the inner element/ the child element (e.g. h3 in the div)
- mouseout
- mousemove - allows to get position of a mouse*/


/*var button = document.getElementById("button").addEventListener("click", runEvent);
function runEvent(e) {
    console.log("Event type: " + e.type);
}*/

/*var button = document.getElementById("button");

//button.addEventListener("dblclick", runEvent);
//button.addEventListener("mousedown", runEvent);
//button.addEventListener("mouseup", runEvent);

function runEvent(e) {
    console.log("Event type: " + e.type);
}*/

/*var box = document.getElementById("box");

//box.addEventListener("mouseenter", runEvent);
//box.addEventListener("mouseover", runEvent);
//box.addEventListener("mouseleave", runEvent);
//box.addEventListener("mouseout", runEvent);

function runEvent(e) {
    console.log("Event type: " + e.type);
}*/

/*var output = document.getElementById("output");
var box = document.getElementById("box");

box.addEventListener("mousemove", runEvent);

function runEvent(e) {
//    output.innerHTML = '<h3>MouseX:  '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
    
// CHANGE COLOR OF BACKGROUND ACCORDING TO POSITION OF MOUSE
    document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
}*/


// KEYBOARD EVENTS
/*
- keyup
- keydown
- keypress
*/

/*var itemInput = document.querySelector('input[type="text"]');

//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

function runEvent(e) {
    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}*/

// TEXT INPUT EVENTS
/*
- focus
- blur
- cut
- paste
- input
- change
- submit
- preventDefault()
*/

/*var itemInput = document.querySelector('input[type="text"]');

//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);

function runEvent() {
    itemInput.style.backgroundColor = "orange";
}*/


/*var itemInput = document.querySelector('input[type="text"]');

//itemInput.addEventListener('cut', everythingDisappears);
itemInput.addEventListener('paste', everythingDisappears);

function everythingDisappears() {
    document.body.style.display = 'none';
}*/

var select = document.querySelector('select');
select.addEventListener('change', runEvent);
function runEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
}

/*var form = document.querySelector('form');
form.addEventListener('submit', runEvent);
function runEvent(e) {
    console.log(e.type);
    e.preventDefault();
}*/