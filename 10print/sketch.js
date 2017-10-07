let x = 0;
let y = 0;
let spacing = 20;

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    stroke(255);
    if (random(1) < 0.7){
        // line(x, y, x + spacing, y + spacing);
        rect(x,y,spacing,spacing);
    } else {
        // line(x + spacing, y, x, y + spacing);
    }

    x += spacing;
    if (x > width){
        x = 0;
        y += spacing
    }
}