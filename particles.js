//Game 1
var c = document.getElementById("game1");
var ctx = c.getContext("2d");



function createparticle() {
ctx.clearRect(particlepos,particlex,particlelength,particleheight);
var height = floor.height;
var particleheight = random(8, 12);
var particlelength = random(8, 12);
var particlex = random(650, 800-particleheight);
var particlepos = 800-particlelength;
ctx.fillStyle="black";
ctx.fillRect(particlepos,particlex,particlelength,particleheight);
setInterval(move, 10);
function move() {
	particlepos -= 10;
	ctx.fillStyle="black";
	ctx.fillRect(particlepos,particlex,particlelength,particleheight);	
}
}




createparticle();
setInterval(createparticle, 400);