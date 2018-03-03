//Game 1
var c = document.getElementById("game1");
var ctx = c.getContext("2d");


function jumpup(argument) {
	
}



function updatefloor(){
	//creating floor
floor.y = c.height - floor.height;
floor.width = c.width;
ctx.fillStyle="#964f15";
ctx.fillRect(floor.x,floor.y,floor.width,floor.height);

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

