var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function setModeBtn() {
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? (numOfSquares = 3) : (numOfSquares = 6);
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare clicked color to picked color
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				messageDisplay.textContent = "Nope! Try Again";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function init() {
	setModeBtn();
	setupSquares();
	reset();
}

function reset() {
	//generate all new colors
	colors = generateRandomColor(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else squares[i].style.display = "none";
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	//set h1 background to default background color
	h1.style.backgroundColor = "steelblue";

	//set messageDisplay to empty string
	messageDisplay.textContent = "";

	//set PlayAgain button to NewColors
	resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function() {
	reset();
});

colorDisplay.textContent = pickedColor;

function changeColor(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num) {
	//make an array
	var arr = [];

	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}

	//return the array
	return arr;
}

function randomColor() {
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);

	//put into rgb(r, g, b)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
