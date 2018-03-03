//Game 1
var c = document.getElementById("game1");
var ctx = c.getContext("2d");

repaint();




window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   if (key == 32) {
   		jumpup();
   }
}