

const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");


/* 
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = "green";
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = "rgb(255 0 255 / 75%)";
ctx.fillRect(25, 100, 175, 50);

ctx.fillStyle = "rgb(103 33 211 / 75%)";
ctx.fillRect(25, 25, 175, 200);

ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
*/


/* 
function degToRad(degrees) {
	return (degrees * Math.PI) / 180;
}

ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);

ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill(); 
*/


/* 
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);

canvas.setAttribute("aria-label", "Canvas text");
*/


/* 
const image = new Image();
image.src = "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";

image.addEventListener("load", () => ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185));
*/


/*
 ctx.translate(width / 2, height / 2);

function degToRad(degrees) {
	return (degrees * Math.PI) / 180;
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let length = 255;
let moveOffset = 100;


for (let i = 0; i < length; i++) {
	ctx.fillStyle = `rgb(${255 - length} 0 ${255 - length} / 90%)`;
	ctx.beginPath();
	ctx.moveTo(moveOffset, moveOffset);
	ctx.lineTo(moveOffset + length, moveOffset);
	const triHeight = (length / 2) * Math.tan(degToRad(60));
	ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
	ctx.lineTo(moveOffset, moveOffset);
	ctx.fill();

	length--;
	moveOffset += 0.7;
	ctx.rotate(degToRad(5));
} 
*/


ctx.fillStyle = "#e5e6e9";
ctx.fillRect(0, 0, width, height);

ctx.translate(width / 2, height / 2);

const image = new Image();
image.src =
	"https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
image.onload = draw;

let spriteIndex = 0;
let posX = 0;
const spriteWidth = 300;
const spriteHeight = 150;
const totalSprites = 12;

function draw() {

	ctx.fillRect(-(width / 2), -(height / 2), width, height);

	ctx.drawImage(
		image,
		0,
		spriteIndex * spriteHeight,
		spriteWidth,
		spriteHeight,
		0 + posX,
		-spriteHeight / 2,
		spriteWidth,
		spriteHeight,
	);

	if (posX % 11 === 0) {
		if (spriteIndex === totalSprites - 1) {
			spriteIndex = 0;
		} else {
			spriteIndex++;
		}
	}

	if (posX < -width / 2 - spriteWidth) {
		const newStartPos = width / 2;
		posX = Math.ceil(newStartPos);
	} else {
		posX -= 2;
	}

	window.requestAnimationFrame(draw);
}