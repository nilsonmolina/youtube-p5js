let particles = [];

function setup() {
    createCanvas(600, 400); 
}

function draw() {
    background(0);

    for (let i = 0; i < 1; i++) {
        particles.push(new Particle());
    }

    particles.forEach((particle, index) => {
        particle.update();
        particle.show();
        if (particle.finished()) {
            particles.splice(index, 1);
        }
    });
}

class Particle {
    constructor() {
        this.x = mouseX;
        this.y = mouseY;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
        this.color = 255;
        this.size = 15;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 1.5;
    }

    show() {
        noStroke();
        fill(this.color, this.alpha);
        ellipse(this.x, this.y, this.size);
    }

    finished() {
        return this.alpha < 0;
    }
}