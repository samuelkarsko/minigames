//Game 1
var c = document.getElementById("game1");
var ctx = c.getContext("2d");

var injump = false;
var jumpInterval;

function jumpup() {
	if (injump == true) {
		clearInterval(jumpInterval);
		console.log("still in jump");
	}
injump = true;
topofjump = false;
var oldposition = figure.y;
var newposition = oldposition - jumpheight;
var fastjump = jumpheight * 0.75;

jumpInterval = setInterval(jump, 10);

function jump() {

if (figure.y > newposition && topofjump == false) { //jump up

var actualjumpheight = oldposition - figure.y;
var jumpheightpercent = actualjumpheight / jumpheight;
ctx.clearRect(figure.x,figure.y,figure.width,figure.height);

if (jumpheightpercent < 0.75) {
figure.y -= 5;
figurepaint();
}else{
	figure.y -= 2;
	figurepaint();
}

}else{ //jump down 
topofjump = true;
var actualjumpheight = oldposition - figure.y;
var jumpheightpercent = actualjumpheight / jumpheight;
ctx.clearRect(figure.x,figure.y,figure.width,figure.height);

if (jumpheightpercent < 0.75) {
figure.y += 5;
figurepaint();
}else{
	figure.y += 2;
	figurepaint();
}

if (figure.y >= 600 - 3) {
	figure.y = 600;
	figurepaint();
	injump = false;
clearInterval(jumpInterval);
}
}

}




}



function updatefloor(){
	//creating floor
floor.y = c.height - floor.height;
floor.width = c.width;
ctx.fillStyle="#964f15";
ctx.fillRect(floor.x,floor.y,floor.width,floor.height);

}

function figurepaint() {
	//creating figure
ctx.fillStyle="black";
ctx.fillRect(figure.x,figure.y,figure.width,figure.height);

}

function repaint() {
//creating figure
ctx.fillStyle="black";
ctx.fillRect(figure.x,figure.y,figure.width,figure.height);

//creating floor
floor.y = c.height - floor.height;
floor.width = c.width;
ctx.fillStyle="#964f15";
ctx.fillRect(floor.x,floor.y,floor.width,floor.height);

}


function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

