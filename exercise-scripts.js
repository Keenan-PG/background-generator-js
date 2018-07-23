var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

/*
*	Random function. From Moz WD.
*/

//accepting min and max as args
function getRandomIntInclusive(min, max) {
	// ceil finds closest(& highest) whole integer (as random returns float & I need whole)
	min = Math.ceil(min);
	// floor finds closest(& highest) whole integer (as random returns float & I need whole)
	max = Math.floor(max);
	// rounding down, randomising number
  	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 

  	// finding bottom whole of calc: random num between 0-1 * (255 - 0 + 1) + 0;
	// i.e. 0.7319995079034332 * (255 - 0 + 1) + 0
	// 0.7319995079034332 * 256 + 0
	// 187.3918740232789 + 0
	// Math.floor(187.3918740232789)
	// 187
	// As random() returns a float between 0-1, you must multiply it by it's max (taken away from min to compensate) so it's within your min & max.
}

function generateRandomRGB() {
	return "rgb(" + getRandomIntInclusive(0, 255) + ", " + getRandomIntInclusive(0, 255) + ", " + getRandomIntInclusive(0, 255) + ")";
}


/*
*	setGradient functions
*/

function setGradient() {
	// changing background css attribute to have color1 + colour2 values
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	// using textContent to print/extract the css
	css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	// changing background css attribute to have color1 + colour2 values
	body.style.background = "linear-gradient(to right, " + generateRandomRGB() + ", " + generateRandomRGB() + ")";
	// using textContent to print/extract the css
	css.textContent = body.style.background + ";";
}

// adding event listeners and using function. 
// could also using oninput="setGradient" in HTML, but I like to stick w/ separation of concerns
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setRandomGradient);