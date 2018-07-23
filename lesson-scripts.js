var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

/*
*	Tests
*/

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// body.style.background = "red";

/*
*	Input event listeners
*/

// now showing each colour as you pick them
// color1.addEventListener("input", function() {
// 	console.log(color1.value);
// });

// color2.addEventListener("input", function() {
// 	console.log(color2.value);
// });

/*
*	Change BG colour with values
*/

// color1.addEventListener("input", function() {
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

// color2.addEventListener("input", function() {
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

/*
*	Creating function for DnRY (Do not repeat yourself)
*/

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);