var color = "red";

/ Sets myDiv background color to black /

var myDiv = document.getElementById('myDiv');
myDiv.style.background = "black";
myDiv.style.color = "white";

var _myVar = "blah";
var $specialName = 1;
/ Prints type of variable myVar /
console.log(typeof myVar === "undefined"); 
/ True /

undefined = true;

console.log(myVar === undefined);

var x = null;

if(x == null) 
	console.log("if");
else
	console.log("else");

var world = "Butt";

function sayHello() {

	var hello "Buns";

	function inner() {
		var extra = "Dog";
		console.log(hello + world + extra);
	} // End inner

	inner();
} // End sayHello

sayHello();

// Shadowing //

var myColor = "blue"

console.log("My color: ", myColor);

function myFunc() {
	var myColor = "black";
	console.log("New Color: ", myColor);
}

myFunc();
