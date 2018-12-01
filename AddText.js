const CANVAS_HEIGHT;
const CANVAS_WIDTH;

function init() {
  CANVAS_HEIGHT = window.innerHeight * .9
  CANVAS_WIDTH = window.innerWidth * .9
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.font = "20px Georgia";
}

function drawText() {
  ctx.fillText("TOP TEXT", 10, 90);
  ctx.fillText("TOP TEXT", 10, 200);
}

