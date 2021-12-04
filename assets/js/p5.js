

var w = window.innerWidth;
var h = window.innerHeight;
var canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    canvas.style('position','fixed');
    strokeWeight(8);
    noCursor();
}
function draw() {
    background(238);
    ellipse(mouseX, mouseY, 10, 10);
}