let x, y, dx, dy;
let radius = 25;

function setup() {
    let canvas = createCanvas(600, 500);
    canvas.parent(document.body);
    canvas.style('border', '8px solid #ffcc00');
    canvas.style('box-shadow', '0 0 30px rgba(0,0,0,0.5)');
    
    x = width / 2;
    y = height / 2;
    dx = 4;
    dy = 3.5;
    
    background(77, 166, 255);
}

function draw() {
    background(77, 166, 255, 35);   // slight trail
    
    x += dx;
    y += dy;
    
    if (x - radius <= 0 || x + radius >= width) dx = -dx;
    if (y - radius <= 0 || y + radius >= height) dy = -dy;
    
    // Glow
    fill(255, 220, 0, 80);
    ellipse(x, y, radius * 2.8);
    
    // Main orb
    fill(255, 240, 0);
    ellipse(x, y, radius * 2);
    
    fill(255, 255, 255, 180);
    ellipse(x - 8, y - 8, 12);
}

function mousePressed() {
    dx = random(-7, 7);
    dy = random(-7, 7);
}

