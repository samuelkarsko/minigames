//Game 1
var c = document.getElementById("game1");
var ctx = c.getContext("2d");

var outerparticleinterval = setInterval(createparticle, 500)

function createparticle() {
var height = floor.height;
var particleheight = random(8, 16);
var particlelength = random(8, 16);
var particlepositionx = 800 - particlelength; 
var particlepositiony = random(650, 800 - particleheight);
var particleinterval = setInterval(move, 30);
particlerender(); 
function move() {
particlepositionx -= 6;
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

ctx.fillStyle="black";
ctx.fillRect(particlepositionx, particlepositiony, particlelength, particleheight);
}
}


;