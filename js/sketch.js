let words = ["Plymouth", "is", "awesome"]
let wordIndex = 0;


function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);
textSize(mouseX);
    text(words[wordIndex], mouseX, mouseY);

}

function keyPressed(){
if (wordIndex == words.length)   {
wordIndex = 0
} else {
    wordIndex++;
} 

console.log('wordIndex:' +wordIndex);
}