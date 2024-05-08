let basket = []
let numCans = 30;


function setup() {
  let canvas = createCanvas(windowWidth, 400);
  canvas.parent("canvasContainer");
  background(0);


  for(let i = 0; i < numCans; i++){
    basket.push(new Can(random(width), random(height)));
  }
  
}

function draw() {
  background(255, 255, 255);

   
  for(i = 0; i < basket.length; i ++ ){
    basket[i].display()
    basket[i].update()
  }
}


class Can{
  constructor(startX,startY){
    this.x = startX;
    this.y = startY;
    this.s = random(0.3, 0.5);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    
    this.date = this.randomDate();
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width) {
      this.speedX = -this.speedX; 
      this.x = constrain(this.x, 0, width); 
    }
    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY; 
      this.y = constrain(this.y, 0, height); 
    }
 
  }
 
  display(){
    push();
    translate(this.x,this.y);
    scale(this.s);
    noStroke();
    fill(150);
    beginShape();
    vertex(120, 200); 
    vertex(280, 200);
    vertex(260, 350); 
    vertex(140, 350);
    endShape(CLOSE);
    fill(120);
    rect(110, 190, 180, 10);

    fill(255); 
    textSize(14);
    textAlign(CENTER, CENTER);
    text(this.date, 200, 275); 
    
  
  pop();
  }
  randomDate(){
    let start = new Date(2024, 0, 1);
    let end = new Date(2025, 0, 1);
    let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0]; 
  }
}