let originalSize = 200; // heart original size
let maxSize = 250; // heart maximum size
let minSize = 190; // heart minimum size
let gSpeed = 1; // grow speed
let sSpeed = 1; // shrink speed
let Growing = true;
let shake = 0.5; // shake extent


function setup() {
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container")
  createCanvas(800, 500);
}

function draw() {
  background(0);
  
  textSize(20);
  text("try to'A' TTACK it",20,25)
  text("try to calm it 'D' OWN",20,45)
  
  // heart color
  fill(220, 20, 60);
  strokeWeight(0);
  // draw heart
  let shakeX = random(-shake, shake);
  let shakeY = random(-shake, shake);
  drawHeart(width / 2 + shakeX, height / 2 + shakeY, originalSize);

  // heart size
  if (Growing) {
    originalSize += gSpeed;
    if (originalSize >= maxSize) {
      Growing = false;
    }
  } else {
    originalSize -= sSpeed;
    if (originalSize <= minSize) {
      Growing = true;
    }
  }
}

// heart
function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y - size / 3);
   bezierVertex(x + size / 2, y - size * 0.8, x + size + 5, y - size * 0.5  + 80, x, y + size * 0.8 - 80);
    bezierVertex(x - size, y - size * 0.5  + 80, x - size / 2 - 5, y - size * 0.8, x, y - size / 3);
  endShape(CLOSE);
}


function keyPressed() {
  if (key === "a" || key === "A") {
    gSpeed += 1; // speed up bounce
    sSpeed += 1; // speed up shrink
  } else if (key === "d" || key === "D") {
    gSpeed -= 1; // slow down bounce
    if (gSpeed < 1) {
      gSpeed = 1; 
    }
    sSpeed -= 1; // slow down shrink
    if (sSpeed < 1) {
      sSpeed = 1; 
    }
  }
}
