//Game 1
var c = document.getElementById("game1");
var ctx = c.getContext("2d");
var retry = false;
var died = false;
repaint();


var counter = 0;

function refilfont() {
ctx.font = "30px Arial";

ctx.fillStyle = "#66ff33";
ctx.fillText(counter,700,40); 
counter++;
ctx.fillStyle = "black";
ctx.fillText(counter,700,40); 
ctx.fillStyle = "black";
}


var counterinterval = setInterval(refilfont, 50);


window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   if (key == 32) {
   		jumpup();
   }
}


