let mb;

let sObject;

function setup() {
  let canvas = createCanvas(windowWidth, 400);
  canvas.parent("canvasContainer");
  

  mb = new MovingBall(width/2, height/2);
  sObject = new SoundObject(width/2, height/2);

}

function draw() {
  background(0);

  mb.update();
  mb.display();

  sObject.update();
  sObject.display();

}

class SoundObject{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    
    
    this.freq = random(50,500);
    this.osc = new p5.Oscillator("sine");
    this.osc.freq(this.freq);

    this.dia = map(this.freq, 50, 500, 90, 10);
    
    this.playing = false;
    this.timeOfLastPlay = 0;
    this.duration = 100;
  }
  update(){
   if(millis() > this.timeOfLastPlay + this.duration && this.playing == true){
    this.stopSound();
   }
  }
  display(){
    push();
    translate(this.x, this.y);
    
    stroke(255);
    let greyTone = map(this.osc.getAmp(), 0, 1, 0, 255);
    fill(greyTone);
    circle(0, 0, this.dia);

    pop();
  }
  playSound(){
    this.osc.start()
    this.osc.amp(1,0.1);
    this.playing = true;

    this.timeOfLastPlay = millis();
  }
  stopSound(){
    this.osc.amp(0,0.5);
    this.playing = false;
  }
}

class MovingBall{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.speedX = random(-8, 8);
    this.speedY = random(-8, 8);
    this.dia = 100;

  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;

    if(this.x > width-this.dia/2 || this.x < this.dia/2){
      this.speedX = -this.speedX;
    }

    if(this.y > height-this.dia/2 || this.y < this.dia/2){
      this.speedY = -this.speedY;
    }
  }
  display(){
    push();
    translate(this.x, this.y);

    circle(0, 0, this.dia);

    pop();
  }
}

function mousePressed(){
  sObject.playSound();
}

// function mouseReleased(){
//   sObject.stopsound();
// }