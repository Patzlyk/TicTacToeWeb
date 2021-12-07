var canv = document.getElementById("myCanvas");
var context = canv.getContext("2d");

context.beginPath();
context.rect(20, 20, 20, 20);
context.fillStyle = "#00FF00";
context.fill();
context.closePath();