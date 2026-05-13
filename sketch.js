    fill("#ffff00");// User variables - easy to change
let circleX = 250;
let circleY = 250;
let circleRadius = 30;
let circleSpeed = 6;

let diam1 = 0;   // Your original growing circle

function setup() {
    createCanvas(500, 500);   // Matching your original size
}

function draw() {
    // Background - blue like your animation
    background("#3ABDFf");
    
    // Yellow bottom section like the YouTube thumbnail
    fill("#FFCC00");
    rect(0, 300, width, height);
    
    // Your original light blue growing circle
    fill("#add8e6");
    stroke("#ffff00");
    strokeWeight(5);
    ellipse(50, 100, diam1, diam1);
    
    // Small yellow circle (your original)
    fill("#FFFF3A");
    ellipse(200, 200, 20, 20);
    
    // Main movable circle (big yellow one)
    fill("#ffeb3b");
    stroke("#ffff00");
    strokeWeight(8);
    
    // Glow effect
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = "#ffeb3b";
    
    ellipse(circleX, circleY, circleRadius * 2);
    
    drawingContext.shadowBlur = 0;   // Reset glow
    
    // "VOLT" text like your original

    textSize(32);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(LEFT);
    text("Volt", 40, 50);
    
    // Movement
    let speed = circleSpeed;
    if (keyIsDown(SHIFT)) speed *= 2;   // Hold Shift = faster
    
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65))  circleX -= speed;  // A
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) circleX += speed;  // D
    if (keyIsDown(UP_ARROW) || keyIsDown(87))    circleY -= speed;  // W
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83))  circleY += speed;  // S
    
    // Keep circle inside canvas
    circleX = constrain(circleX, circleRadius, width - circleRadius);
    circleY = constrain(circleY, circleRadius, height - circleRadius);
}

// Click to teleport the big circle + your original growing effect
function mousePressed() {
    // Teleport big circle to mouse
    circleX = mouseX;
    circleY = mouseY;
    
    // Your original growing circle logic
    if (diam1 > 100) {
        diam1 = 0;
    } else {
        diam1 += 15;
    }
}

// Optional: Click and drag to move the circle
function mouseDragged() {
    circleX = mouseX;
    circleY = mouseY;
}
