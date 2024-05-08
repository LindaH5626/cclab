let basket = []
let numCans = 15;


function setup() {
  let canvas = createCanvas(windowWidth, 200);
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
   this.s = random(0.3,0.5);
   this.speedX = random(-1,1);
   this.speedY = random(-1,1);

   this.showYolk = true;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;

    if(this.x < 0 || this.x > width){
      this.speedX = -this.speedX
      this.showYolk = !this.showYolk;
    }
    if(this.y < 0 || this.y > height){
      this.speedY = -this.speedY
      this.showYolk = !this.showYolk;
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
    
  
  pop();
  }
}