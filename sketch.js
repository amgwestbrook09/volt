// User variables - easy to change
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
