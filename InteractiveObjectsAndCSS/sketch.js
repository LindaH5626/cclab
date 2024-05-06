let faces = [];
let numFaces = 4;
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  for (let i = 0; i < numFaces; i++) {
    faces.push(new Face(random(width),
      random(height)));
  }
}
function draw() {
  background(180);
  for (let i = 0; i < faces.length; i++) {
    faces[i].update();
    faces[i].display();
  }
  // if(frameCount > 500){
  //   //millis() > 3000   =3 seconds
  //   for (let i = 0; i < faces.length; i++) {
  //     faces[i].turnAngry();
  //   }
  // }

  for(let i = faces.length - 1; i >= 0; i--){
    if(faces[i].alive == false){
      faces.splice(i, 1);
    }
  }
}
class Face {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.offsetX = 0;

    this.normalColor = color(220, 250, 90);
    this.angryColor = color(255, 90, 29);
    this.c = this.normalColor;


    this.oOffset = random (2*PI);
    this.speedFactor = random(0.1, 0.3);

    this.frameAtBirth = frameCount;
    this.age = 0;
    this.ageTurnAngry = random(300, 600);

    this.alive = true;

  } update() {
    this.offsetX = map(sin((frameCount+this.oOffset) * this.speedFactor), -1, 1, -20, 20);
    this.age = frameCount - this.frameAtBirth

    // if(this.age > this.ageTurnAngry){
    //   this.turnAngry();
    // }
  }
  display() {
    push();
    translate(this.x + this.offsetX, this.y);
    noStroke();

    fill(this.c);
    circle(0, 0, 50);
    fill(0);
    circle(-10, -10, 5)
    circle(10, -10, 5)
    ellipse(0, 10, 8, 9)

    // text(this.frameAtBirth, 10, 10);
    // text(this.age, 10, 20);
    pop();
  
  }

  turnAngry(){
    this.c = this.angryColor
  }
  checkDistance(){
    if (dist(mouseX, mouseY, this.x + this.offsetX, this.y) < 25){
      // this.turnAngry();
      this.alive = false
    }
  }
}

function mousePressed(){
  // for (let i = 0; i < faces.length; i++) {
  //   faces[i].turnAngry();
  // }
  for (let i = 0; i < faces.length; i++) {
    faces[i].checkDistance();
  }
}

function keyPressed(){
  faces.push(new Face(mouseX, mouseY));
}