//Game 1
var c = document.getElementById("game1");
var ctx = c.getContext("2d");
//Game 1
var outerwallintervall = setInterval(wall, 2000);


//upperwall
function wall() {
	var minheight = 100;
	var maxheight = 500;
	var wallwidth = 20;
	var wallposition = 800 - wallwidth;
	var height = random(minheight, maxheight);
	var wallheightforlater = height;
	var fillcolor = "black";
	ctx.fillStyle = fillcolor;
	ctx.fillRect(wallposition, 0, wallwidth,height);

	var underposition = height + 200;  
	var underheight = 650 - underposition;
	if (underheight < 0) {
		underheight = 0;
	}

	ctx.fillStyle="black";
	ctx.fillRect(wallposition, underposition, wallwidth, underheight);

	var wallintervall = setInterval(move, 10);
	function move() {
	ctx.clearRect(wallposition, 0, wallwidth,height);
	ctx.clearRect(wallposition, underposition, wallwidth, underheight);
		if (died == false) {
			
	wallposition -= 3;
		}
	ctx.fillRect(wallposition, 0, wallwidth,height);
	ctx.fillRect(wallposition, underposition, wallwidth, underheight);


	//hit detection
	var cubeminwidth = figure.x;
	var cubemaxwidth = figure.x + figure.width;
	var cubemaxheight = figure.y;
	var cubeminheight = figure.y + figure.height;

	var openspacedown = wallheightforlater + 200;
	var openspaceup = wallheightforlater;

	if (wallposition < cubemaxwidth && wallposition + wallwidth > cubeminwidth) {
			if (cubemaxheight < openspaceup || cubeminheight > openspacedown) {
				clearInterval(counterinterval);
				clearInterval(outerparticleinterval);
				clearInterval(outerwallintervall);
				fillcolor = "red";


					ctx.font = "60px Arial";
					ctx.fillStyle = "black";
				    
				    var tempinterval = setInterval(newmove, 30);
				    var textposition = 800;
				    function newmove() {
				    	ctx.fillStyle = "#66ff33";
						ctx.fillText("Your score is " + counter,textposition,400); 
				    	textposition -= 10;
				    	ctx.fillStyle = "black";
				    	ctx.fillText("Your score is " + counter,textposition,400); 
				    	if (textposition < 201) {
				    		clearInterval(tempinterval);
				    		ctx.font = "60px Arial";
							ctx.fillStyle = "white";
							ctx.fillText("Retry?",textposition + 130,500); 
										died = true;
										retry = true;

							    	}
				    }



			}
	}


	}
}




