var col = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    col = map(mouseX, 0, 600, 0, 255);
    background(col);
    //rect(100, 200, 25, 25);
}
