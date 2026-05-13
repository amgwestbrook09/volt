   let x, y, dx, dy;
let radius = 25;

function setup() {
    let canvas = createCanvas(600, 500);
    canvas.parent("body");           // puts canvas in the page
    canvas.style('border', '8px solid #ffcc00');
    canvas.style('box-shadow', '0 0 30px rgba(0,0,0,0.5)');
    
    // Starting position in the center
    x = width / 2;
    y = height / 2;
    
    // Movement speed
    dx = 4;
    dy = 3.5;
    
    background(77, 166, 255); // blue background
}

function draw() {
    // Blue background (fades trails slightly)
    background(77, 166, 255, 40);
    
    // Update position
    x += dx;
    y += dy;
    
    // Bounce off walls
    if (x - radius <= 0 || x + radius >= width) {
        dx = -dx;
    }
    if (y - radius <= 0 || y + radius >= height) {
        dy = -dy;
    }
    
    // Draw the glowing yellow Volt orb
    noStroke();
    
    // Glow effect
    fill(255, 220, 0, 80);
    ellipse(x, y, radius * 2.8);
    
    // Main circle
    fill(255, 240, 0);
    ellipse(x, y, radius * 2);
    
    // Highlight
    fill(255, 255, 255, 180);
    ellipse(x - 8, y - 8, 12);
}

// Click the canvas to give Volt a speed boost in random direction
function mousePressed() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        dx = random(-7, 7);
        dy = random(-7, 7);
    }
}

