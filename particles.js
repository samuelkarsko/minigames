//Game 1
var c = document.getElementById("game1");
var ctx = c.getContext("2d");



function createparticle() {
var height = floor.height;
var particleheight = random(8, 12);
var particlelength = random(8, 12);
var particlepositionx = 800 - particlelength; 
var particlepositiony = random(650, 800);
var particleinterval = setInterval(move, 30);
particlerender();
function move() {
particlepositionx -= 10;
particlerender();
if (particlepositionx < -30) {
	clearInterval(particleinterval);
	return;
}
}	
function particlerender() {
var oldposition = particlepositionx + 30;
ctx.fillStyle="#964f15";
ctx.fillRect(oldposition,particlepositiony,10,particleheight);

ctx.fillStyle="blue";
ctx.fillRect(particlepositionx, particlepositiony, particlelength, particleheight);
}
}


setInterval(createparticle, 500);