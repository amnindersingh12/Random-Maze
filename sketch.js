//Inspired by the Coding Train and his Coding Challenge
// Made with <3 By Amninder Singh
// Random Maze

let x = 0;let y = 0;
let spacing = 20;

//Setting up screen
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
} 
 
//Start Drawing
function draw() {
	let r = random(255);
	let g = random(255);
	let b = random(255);
	noStroke();
	
    //lets see the mmagic of random
	if(random(1) < random(1)) {
		fill(r, g, b);
		stroke(r, g, b);
		line(x, y, x+random(spacing)/7, y+spacing);
	} else {
		fill(r, g, b);
		stroke(r, g, b);
		line(x, y+random(spacing)/7, x+spacing, y);
	}
	x = x + spacing;
	if(x > width) {
		x = 0;
		y = y + spacing;
	}
}