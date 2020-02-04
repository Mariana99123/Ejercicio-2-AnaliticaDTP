let x =300;
let y =300;
let d =50;
let label = "bola";
let counter = 0;



function setup() {
  createCanvas(600, 600);
}

function draw() {
  //background(220);
  noStroke();
  fill(random(100,255), random(0, 100), random(100, 255));
  ellipse(x, y, d, d);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(d/10);
  text(label + " "+ counter, x, y);
  
 // x = random(0, width);
  //y = random(0, height);
  d = dist(width/2, height/2, mouseX, mouseY);
  counter++;
  console.log(counter);
  //d = d +1;
  //d += 1; es lo mismo 
  //d++;
  //x = x +1;
  //x = x - 1
  //x--;
}
