// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 300; // Decide the initial number of particles.

let particles = [];


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasWrapper");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(0);
  drawStarryBackground();

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}
function drawStarryBackground() {
  // Draw random stars in the background
  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 3);
    fill(255);
    circle(x, y, size);
  }
}
class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = random(width);
    this.y = random(height);
    this.radiusSpeed = 2;
    this.angleFromCenter = Math.atan2(this.y-height/2, this.x - width/2 )
    this.Xspeed = cos(this.angleFromCenter) * this.radiusSpeed
    this.Yspeed = sin(this.angleFromCenter) * this.radiusSpeed
    this.size = random(3,8);
    this.color = color(random(255), random(255), random(255),100);
    this.shrink = false;
  }
  // methods (functions): particle's behaviors
  update() {
    this.x += this.Xspeed;
    this.y += this.Yspeed;
    this.size += (this.shrink ? -0.5 : 0.5);

    if (this.size >= 8 || this.size <= 3) {
      this.shrink = !this.shrink;
    }

    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = width/2;
      this.y = height/2;
    }
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    
    noStroke();
    fill(this.color);
    beginShape();
    vertex(0, -this.size * 2);
    vertex(this.size, -this.size);
    vertex(this.size * 2, 0);
    vertex(this.size, this.size);
    vertex(0, this.size * 2);
    vertex(-this.size, this.size);
    vertex(-this.size * 2, 0);
    vertex(-this.size, -this.size);
    endShape(CLOSE);
    
    pop();
  }
}
