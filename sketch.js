var diam1=0;

function setup() {
    createCanvas(500,500);
}

function draw() {
    background("#3ABDFF");
    fill("#add8e6");
    stroke("#ffff00")
    strokeWeight(5);
    ellipse(50,100,diam1,diam1);
    
    fill("#FFFF3A");
    ellipse(200,200,20,20);
    textSize(20);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("Volt",40,40);
}

function mousepressd(){
    if(diam1>50){
       diam1=0;
    }else{
    diam1=diam1+5
    }
  }
