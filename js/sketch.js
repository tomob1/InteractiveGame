var widthRect = 70;
var heightRect = 70;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(220);
}

function draw() {



}

function mousePressed() {
    if (mouseButton == LEFT) {
        fill(255, 255, 255);
        rectMode(CENTER)
        rect(mouseX, mouseY, widthRect, heightRect);
    }

    if (mouseButton == RIGHT) {
        fill(255, 255, 255);
        ellipseMode(CENTER)
        ellipse(mouseX, mouseY, widthRect, heightRect);
    }

}

function keyPressed() {
    if (keyCode == ENTER){
        background(0)
}
if (keyCode == UP_ARROW) {
    rect(mouseX, mouseY, widthRect+20, widthRect+40)
    
    }

if (keyCode == DOWN_ARROW) {
    fill(random(0,255), random(0,255), random(0,255))
    triangle(mouseX,mouseY,mouseX=50,mouseY, mouseX=25, mouseY-50)
}

}