let bubbles = [];

function setup() {
    createCanvas(600, 400);
    
}

function mousePressed() {
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(0);
    bubbles.forEach(bubble => {
        bubble.move();
        bubble.show();
    });
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);      
    }
    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        // noStroke();
        // fill(255, 10);
        ellipse(this.x, this.y, this.r * 2);
    }
}