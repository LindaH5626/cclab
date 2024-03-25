

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new LindaDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class LindaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.rectColor = color(240, 210, 80);
    this.handAngle = 0; 
    this.handDirection = 1; 
    this.handSwingSpeed = 0.05; 
    this.legAngle = 0; 
    this.legDirection = 1; 
    this.legMoveSpeed = 0.05; 
    this.verticalOffset = 0; 
    this.verticalSpeed = 2; 
    
  }
  update() {
    this.rectColor = color(random(255), random(255), random(255));
    this.handAngle += this.handSwingSpeed * this.handDirection;
    
  
    if (this.handAngle > PI / 4 || this.handAngle < -PI / 4) {
      this.handDirection *= -1;
    }
    this.legAngle += this.legMoveSpeed * this.legDirection;
    
    
    if (this.legAngle > PI / 4 || this.legAngle < -PI / 4) {
      this.legDirection *= -1;
    }
    this.verticalOffset += this.verticalSpeed;
    
    
    if (this.verticalOffset >= 100 || this.verticalOffset <= -100) {
      this.verticalSpeed *= -1;
    }
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y + this.verticalOffset);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    
    

    stroke(255);
    strokeWeight(10);
    line(0, -50, 0, 60); // 身体直线

    // hands
    let handOffset = sin(this.handAngle) * 30;
    line(0, 0, -30 - handOffset, 30); // left
    line(0, 0, 30 + handOffset, 30); // right

    // legs
    let legOffset = sin(this.legAngle) * 20;
    line(0, 60, -30 - legOffset, 100); // left
    line(0, 60, 30 + legOffset, 100); // right
    
    
    noStroke();
    fill(250,100,70);
    circle(0,-80,25);
    circle(20,-72,25);
    circle(30,-52,25);
    circle(-20,-72,25);
    circle(-30,-52,25);
    circle(0,-20,25);
    circle(20,-32,25);
    circle(-20,-32,25);
  
    fill(240,210,80);
    circle(0, -50, 60);

    fill(this.rectColor);
    rect(-25,-60,20,10);
    rect(5,-60,20,10);





    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/