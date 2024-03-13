let sinX = 0;
let timeToBeatAgain = 0;
let sinXAtPreviousPause = 0;
let originalSize = 200; // heart original size
let maxSize = 250; // heart maximum size
let minSize = 190; // heart minimum size
let gSpeed = sinX; // grow speed
let sSpeed = sinX; // shrink speed
let Growing = true;
let shake = 0.5; // shake extent
let x = 0;
let y = 200;
let heartRate = [];
let interval = 3;


function setup() {
let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container")
}

function draw() {
    background(0);

    textSize(20);
    text("-PRESS KEY-", 20, 25)
    text("try to'A' TTACK it", 20, 45)
    text("try to calm it 'D' OWN", 20, 65)
    text("Hype rate:", 650, 485)
    text(gSpeed * 142, 750, 485)

    // draw heart
    let shakeX = random(-shake, shake);
    let shakeY = random(-shake, shake);

    drawHeartRate();

    // hype factor
    if (gSpeed > 0) {
        for (let i = 0; i < gSpeed * 10; i++) {
            let x = random(width);
            let y = random(height);
            point(x, y);
        }
    }


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


//heart rate
function drawHeartRate() {

    let randomHeartRate = random(-100, 200);

    heartRate.push(randomHeartRate);

    if (x + heartRate.length * interval > 800) {
        // clear array
        heartRate = [];
        // redo
        for (let i = 0; i < 200; i++) {
            heartRate.push(random(-100, 200));
        }
    }

    beginShape();
    noFill();
    // green
    stroke(0, 255, 0);
    strokeWeight(2);
    for (let i = 0; i < heartRate.length; i += interval) {
        let index = floor(i / interval);
        vertex(x + i * interval, y + heartRate[index]);
    }

    endShape();
}
// heart
function drawHeart(x, y, size) {
    push();
    // heart color
    fill(220, 20, 60);
    strokeWeight(0);
    beginShape();
    vertex(x, y - size / 3);
    bezierVertex(x + size / 2, y - size * 0.8, x + size + 5, y - size * 0.5 + 80, x, y + size * 0.8 - 80);
    bezierVertex(x - size, y - size * 0.5 + 80, x - size / 2 - 5, y - size * 0.8, x, y - size / 3);
    endShape(CLOSE);
    pop();
}


function keyPressed() {
    if (key === "a" || key === "A") {
        let sinY = sin(radians(sinX));
        if (frameCount > timeToBeatAgain) {
            sinX += 1;
        }

        if (sinX % 360 == 0 && sinX != sinXAtPreviousPause) {
            timeToBeatAgain = frameCount + 80; // 100 frames in the future
            sinXAtPreviousPause = sinX;
        }
        gSpeed += sinX; // speed up bounce
        sSpeed += sinX; // speed up shrink
    } else if (key === "d" || key === "D") {
        gSpeed -= sinX; // slow down bounce
        if (gSpeed < 1) {
            gSpeed = 1;
        }
        sSpeed -= 1; // slow down shrink
        if (sSpeed < 1) {
            sSpeed = 1;
        }
    }

}